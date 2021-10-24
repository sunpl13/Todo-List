# 📋TODO-List

## **💬소개**

&nbsp;

> React와 Redux-Saga를 이용한 TODO-List!

![투두리스트](https://user-images.githubusercontent.com/68778883/138549999-193a2f68-c2c9-40fc-9b9f-8748d47ef5be.PNG)

&nbsp;
&nbsp;
&nbsp;

# 📦패키지

&nbsp;

```
redux
```

```
redux-saga
```

&nbsp;

# 📁폴더구조

&nbsp;

```javascript
├─TODO
│  │  README.md
│  │  package.json
│  │  .env
│  ├─public
│  │  ├─images
│  │  │  ├─check.png
│  │  │  └─edit.png
│  │  │ index.html
│  │  │ //이하 중략
│  │  └ manifest.json
│  └─src
│     ├─components
│     │  ├─Insert.js
│     │  ├─ListItem.js
│     │  └ TodoList.js
│     ├─css
│     │  ├─App.css
│     │  ├─insert.css
│     │  └ list_item.css
│     ├─modules
│     │  ├─redux
│     │  │  ├─reducer.js
│     │  │  ├─store.js
│     │  │  └─rootReducer.js
│     │  ├─action.js
│     │  └ actionType.js
│     ├─sagas
│     │  └ todoSagas.js
│     ├─api.js
│     ├─App.js
│     └ index.js
```

&nbsp;

# 📝설명

## **.env**

서버 통신을 하면서 알려지면 안되는 민감한 정보(서버 URL)를 env 파일에 저장해 놓았다.

기본적으로 env 파일은 gitignore에 설정해서 push 하지 않지만 가벼운 todolist이므로 push했다.

```
REACT_APP_URL = http://dummy-server.io
```

가져와서 쓸 때는 아래처럼 가져와서 쓴다.

```javascript
const url = process.env.REACT_APP_URL;
```

<br/>

## **api.js**

redux-saga에서 실질적으로 서버통신을 할 Rest API 문서이다.

```javascript
//투두리스트 데이터 가져오기
export const GetTodoHandler = async () => await axios.get(`${url}`);

//투두리스트 생성
export const CreateTodoHandler = async (todoData) =>
  await axios.post(`${url}`, todoData);

//투두리스트 삭제
export const DeleteTodoHandler = async (id) =>
  await axios.delete(`${url}/${id}`);

//투두리스트 수정
export const ModifyTodoHandler = async (id, todoinfo) =>
  await axios.put(`${url}/${id}`, todoinfo);

//체크여부 수정
export const ToggleTodoHandler = async (id, cheked) =>
  await axios.put(`${url}/${id}`, cheked);
```

## **action.js**

redux의 액션이 일어날 액션 생성 함수를 정의 하였다.

```javascript
//조회
export const GetTodoLoading = () => ({
type: type.GET_TODO_LOADING,
});

export const GetTodoSuccess = (data) => ({
type: type.GET_TODO_SUCCESS,
payload: data,
});

...     //이하 중략
```

## **actionType.js**

액션 타입을 정의

```javascript
//조회
export const GET_TODO_LOADING = "GET_TODO_LOADING";
export const GET_TODO_SUCCESS = "GET_TODO_SUCCESS";
export const GET_TODO_FAIL = "GET_TODO_FAIL";

//생성
export const CREATE_TODO_LOADING = "CREATE_TODO_LOADING";
export const CREATE_TODO_SUCCESS = "CREATE_TODO_SUCCESS";
export const CREATE_TODO_FAIL = "CREATE_TODO_FAIL";

//삭제
export const DELETE_TODO_LOADING = "DELETE_TODO_LOADING";
export const DELETE_TODO_SUCCESS = "DELETE_TODO_SUCCESS";
export const DELETE_TODO_FAIL = "DELETE_TODO_FAIL";

//수정
export const MODIFY_TODO_LOADING = "MODIFY_TODO_LOADING";
export const MODIFY_TODO_SUCCESS = "MODIFY_TODO_SUCCESS";
export const MODIFY_TODO_FAIL = "MODIFY_TODO_FAIL";

//토글 수정
export const MODIFY_TOGGLE_LOADING = "MODIFY_TOGGLE_LOADING";
export const MODIFY_TOGGLE_SUCCESS = "MODIFY_TOGGLE_SUCCESS";
export const MODIFY_TOGGLE_FAIL = "MODIFY_TOGGLE_FAIL";
```

## **todoSagas.js**

saga 파일로서
watcher로 액션을 모니터링하고, worker로 함수를 실행한다.

```javascript
/* ---------------------------worker------------------------- */

//조회
function* GetTodoAsnc() {
try {
  const res = yield call(GetTodoHandler);
  if (res.status === 200) {
    //데이터를 정상적으로 받아왔다면
    yield put(GetTodoSuccess(res.data));
  }
} catch (error) {
  yield put(GetTodoFail(error.res.data));
}
}

...     //이하 중략

/* ---------------------------watcher------------------------- */
//조회
function* GetTodoData() {
yield takeEvery(type.GET_TODO_LOADING, GetTodoAsnc);
}

...     //이하중략
```
