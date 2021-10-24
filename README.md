# 📋TODO-List

## **💬소개**

&nbsp;

> **React와 Redux-Saga를 이용한 TODO-List!**

![투두리스트](https://user-images.githubusercontent.com/68778883/138549999-193a2f68-c2c9-40fc-9b9f-8748d47ef5be.PNG)

&nbsp;
&nbsp;
&nbsp;
<br/>
<br/>

# 📅실행예제

## 리스트 생성

![생성](https://user-images.githubusercontent.com/68778883/138600909-6975a0aa-bdf1-4174-b64f-e5be6b998ada.gif)
<br/>
<br/>

## 리스트 수정

![수정](https://user-images.githubusercontent.com/68778883/138600911-278cc05e-2d26-483b-9f73-d0397466bec7.gif)
<br/>
<br/>

## 리스트 삭제

![삭제](https://user-images.githubusercontent.com/68778883/138600907-b311634d-47f4-468a-909c-05835ed5349c.gif)
&nbsp;
&nbsp;
&nbsp;
<br/>
<br/>

## 완료여부 체크

![완료여부](https://user-images.githubusercontent.com/68778883/138600912-3a7958fb-c6bb-4b43-b324-944fb9a6d2f3.gif)

<br/>
<br/>

# 📦패키지

&nbsp;

```
redux
```

```
redux-saga
```

&nbsp;

# 🎨실행환경

> ## 구현한 서버환경 &nbsp; : &nbsp; `json-server`
>
> <br/>

### **json-server의 json 파일 구조**

```json
{
  "todoList": [
    {
      "id": 1,
      "content": "커피마시기",
      "createdAt": "2021-10-24T15:03:07.136Z",
      "isCheck": false
    }
  ]
}
```

 <br/>

## <span style = "color : red">유의 사항!</span>

## 1. todoSagas.js 54번째 줄

실행 환경에 따라 `res.status`의 코드 번호가 달라질 수 있다.

```javascript
if (res.status === 201) {
      //데이터를 정상적으로 받아왔다면

      yield put(CreateTodoSuccess(res.data)); //
    }
```

<br/>

## 2. Insert.js 16줄(insertHandler함수)

실행 환경에 따라 id값을 직접 줘야 할 수도, 주지 않아도 될 수도 있다.

```javascript
const insertHandler = () => {
  //이미 추가된 리스트에 추가할 값이 있는지 확인
  if (list.some((item) => item.content === todo)) {
    alert("리스트에 이미 추가되어 있습니다!");
  } else {
    //id 값이 주어지지 않을 때
    dispatch(
      CreateTodoLoading({
        id: list.length === 0 ? 0 : list[list.length - 1].id + 1, //배열의 마지막 인덱스의 id 값에서 +1
        content: todo,
        createdAt: date,
        isCheck: false,
      })
    );

    /*     id 값이 주어졌을 때
    dispatch(
      CreateTodoLoading({
        content: todo,
        createdAt: date,
        isCheck: false,
      })
    );
    */
  }
};
```

<br/>

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

# 😊잘했다고 생각한 점

reducer.js에서 반복되는 코드들을 삭제한 것!

### **변경 전**

```javascript
const todoReducer = (state = initialState, action) => {
  switch (action.type) {
    //조회
    case type.GET_TODO_LOADING:
      return {
        ...state,
        loading: true,
      };
    case type.GET_TODO_SUCCESS:
      return {
        ...state,
        loading: false,
        todolist: action.payload,
      };
    case type.GET_TODO_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    //생성
    case type.CREATE_TODO_LOADING:
      return {
        ...state,
        loading: true,
      };
    case type.CREATE_TODO_SUCCESS:
      return {
        ...state,
        loading: false,
        todolist: state.todolist.concat(action.payload),
      };
    case type.CREATE_TODO_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    //삭제
    case type.DELETE_TODO_LOADING:
      return {
        ...state,
        loading: true,
      };
    case type.DELETE_TODO_SUCCESS:
      return {
        ...state,
        loading: false,
        todolist: state.todolist.filter((item) => item.id !== action.payload),
      };
    case type.DELETE_TODO_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    //수정
    case type.MODIFY_TODO_LOADING:
      return {
        ...state,
        loading: true,
      };
    case type.MODIFY_TODO_SUCCESS:
      return {
        ...state,
        loading: false,
        todolist: state.todolist.map((item) => ({
          ...item,
          content:
            item.id === action.payload.id
              ? action.payload.content
              : item.content,
        })),
      };
    case type.MODIFY_TODO_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    //완료여부
    case type.MODIFY_TOGGLE_LOADING:
      return {
        ...state,
        loading: true,
      };
    case type.MODIFY_TOGGLE_SUCCESS:
      return {
        ...state,
        loading: false,
        todolist: state.todolist.map((item) => ({
          ...item,
          isCheck:
            item.id === action.payload.id
              ? action.payload.isCheck
              : item.isCheck,
        })),
      };
    case type.MODIFY_TOGGLE_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};
```

### **변경 후**

```javascript
const todoReducer = (state = initialState, action) => {
  switch (action.type) {
    case type.GET_TODO_LOADING:
    case type.CREATE_TODO_LOADING:
    case type.DELETE_TODO_LOADING:
    case type.MODIFY_TODO_LOADING:
    case type.MODIFY_TOGGLE_LOADING:
      return {
        ...state,
        loading: true,
      };
    //조회
    case type.GET_TODO_SUCCESS:
      return {
        ...state,
        loading: false,
        todolist: action.payload,
      };
    case type.GET_TODO_FAIL:
    case type.CREATE_TODO_FAIL:
    case type.DELETE_TODO_FAIL:
    case type.MODIFY_TODO_FAIL:
    case type.MODIFY_TOGGLE_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    //생성
    case type.CREATE_TODO_SUCCESS:
      return {
        ...state,
        loading: false,
        todolist: state.todolist.concat(action.payload),
      };

    //삭제
    case type.DELETE_TODO_SUCCESS:
      return {
        ...state,
        loading: false,
        todolist: state.todolist.filter((item) => item.id !== action.payload),
      };

    //수정
    case type.MODIFY_TODO_SUCCESS:
      return {
        ...state,
        loading: false,
        todolist: state.todolist.map((item) => ({
          ...item,
          content:
            item.id === action.payload.id
              ? action.payload.content
              : item.content,
        })),
      };

    //완료여부
    case type.MODIFY_TOGGLE_SUCCESS:
      return {
        ...state,
        loading: false,
        todolist: state.todolist.map((item) => ({
          ...item,
          isCheck:
            item.id === action.payload.id
              ? action.payload.isCheck
              : item.isCheck,
        })),
      };

    default:
      return state;
  }
};
```
