# ๐TODO-List

## **๐ฌ์๊ฐ**

&nbsp;

> **React์ Redux-Saga๋ฅผ ์ด์ฉํ TODO-List!**

![ํฌ๋๋ฆฌ์คํธ](https://user-images.githubusercontent.com/68778883/138549999-193a2f68-c2c9-40fc-9b9f-8748d47ef5be.PNG)

&nbsp;
&nbsp;
&nbsp;
<br/>
<br/>

# ๐์คํ์์ 

## ๋ฆฌ์คํธ ์์ฑ

![์์ฑ](https://user-images.githubusercontent.com/68778883/138600909-6975a0aa-bdf1-4174-b64f-e5be6b998ada.gif)
<br/>
<br/>

## ๋ฆฌ์คํธ ์์ 

![์์ ](https://user-images.githubusercontent.com/68778883/138600911-278cc05e-2d26-483b-9f73-d0397466bec7.gif)
<br/>
<br/>

## ๋ฆฌ์คํธ ์ญ์ 

![์ญ์ ](https://user-images.githubusercontent.com/68778883/138600907-b311634d-47f4-468a-909c-05835ed5349c.gif)
&nbsp;
&nbsp;
&nbsp;
<br/>
<br/>

## ์๋ฃ์ฌ๋ถ ์ฒดํฌ

![์๋ฃ์ฌ๋ถ](https://user-images.githubusercontent.com/68778883/138600912-3a7958fb-c6bb-4b43-b324-944fb9a6d2f3.gif)

<br/>
<br/>

# ๐ฆํจํค์ง

&nbsp;

```
redux
```

```
redux-saga
```

&nbsp;

# ๐จ์คํํ๊ฒฝ

> ## ๊ตฌํํ ์๋ฒํ๊ฒฝ &nbsp; : &nbsp; `json-server`
>
> <br/>

### **json-server์ json ํ์ผ ๊ตฌ์กฐ**

```json
{
  "todoList": [
    {
      "id": 1,
      "content": "์ปคํผ๋ง์๊ธฐ",
      "createdAt": "2021-10-24T15:03:07.136Z",
      "isCheck": false
    }
  ]
}
```

 <br/>

## <span style = "color : red">์ ์ ์ฌํญ!</span>

## 1. todoSagas.js 54๋ฒ์งธ ์ค

์คํ ํ๊ฒฝ์ ๋ฐ๋ผ `res.status`์ ์ฝ๋ ๋ฒํธ๊ฐ ๋ฌ๋ผ์ง ์ ์๋ค.

```javascript
if (res.status === 201) {
      //๋ฐ์ดํฐ๋ฅผ ์ ์์ ์ผ๋ก ๋ฐ์์๋ค๋ฉด

      yield put(CreateTodoSuccess(res.data)); //
    }
```

<br/>

## 2. Insert.js 16์ค(insertHandlerํจ์)

์คํ ํ๊ฒฝ์ ๋ฐ๋ผ id๊ฐ์ ์ง์  ์ค์ผ ํ  ์๋, ์ฃผ์ง ์์๋ ๋  ์๋ ์๋ค.

```javascript
const insertHandler = () => {
  //์ด๋ฏธ ์ถ๊ฐ๋ ๋ฆฌ์คํธ์ ์ถ๊ฐํ  ๊ฐ์ด ์๋์ง ํ์ธ
  if (list.some((item) => item.content === todo)) {
    alert("๋ฆฌ์คํธ์ ์ด๋ฏธ ์ถ๊ฐ๋์ด ์์ต๋๋ค!");
  } else {
    //id ๊ฐ์ด ์ฃผ์ด์ง์ง ์์ ๋
    dispatch(
      CreateTodoLoading({
        id: list.length === 0 ? 0 : list[list.length - 1].id + 1, //๋ฐฐ์ด์ ๋ง์ง๋ง ์ธ๋ฑ์ค์ id ๊ฐ์์ +1
        content: todo,
        createdAt: date,
        isCheck: false,
      })
    );

    /*     id ๊ฐ์ด ์ฃผ์ด์ก์ ๋
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

# ๐ํด๋๊ตฌ์กฐ

&nbsp;

```javascript
โโTODO
โ  โ  README.md
โ  โ  package.json
โ  โ  .env
โ  โโpublic
โ  โ  โโimages
โ  โ  โ  โโcheck.png
โ  โ  โ  โโedit.png
โ  โ  โ index.html
โ  โ  โ //์ดํ ์ค๋ต
โ  โ  โ manifest.json
โ  โโsrc
โ     โโcomponents
โ     โ  โโInsert.js
โ     โ  โโListItem.js
โ     โ  โ TodoList.js
โ     โโcss
โ     โ  โโApp.css
โ     โ  โโinsert.css
โ     โ  โ list_item.css
โ     โโmodules
โ     โ  โโredux
โ     โ  โ  โโreducer.js
โ     โ  โ  โโstore.js
โ     โ  โ  โโrootReducer.js
โ     โ  โโaction.js
โ     โ  โ actionType.js
โ     โโsagas
โ     โ  โ todoSagas.js
โ     โโapi.js
โ     โโApp.js
โ     โ index.js
```

&nbsp;

# ๐์ค๋ช

## **.env**

์๋ฒ ํต์ ์ ํ๋ฉด์ ์๋ ค์ง๋ฉด ์๋๋ ๋ฏผ๊ฐํ ์ ๋ณด(์๋ฒ URL)๋ฅผ env ํ์ผ์ ์ ์ฅํด ๋์๋ค.

๊ธฐ๋ณธ์ ์ผ๋ก env ํ์ผ์ gitignore์ ์ค์ ํด์ push ํ์ง ์์ง๋ง ๊ฐ๋ฒผ์ด todolist์ด๋ฏ๋ก pushํ๋ค.

```
REACT_APP_URL = http://dummy-server.io
```

๊ฐ์ ธ์์ ์ธ ๋๋ ์๋์ฒ๋ผ ๊ฐ์ ธ์์ ์ด๋ค.

```javascript
const url = process.env.REACT_APP_URL;
```

<br/>

## **api.js**

redux-saga์์ ์ค์ง์ ์ผ๋ก ์๋ฒํต์ ์ ํ  Rest API ๋ฌธ์์ด๋ค.

```javascript
//ํฌ๋๋ฆฌ์คํธ ๋ฐ์ดํฐ ๊ฐ์ ธ์ค๊ธฐ
export const GetTodoHandler = async () => await axios.get(`${url}`);

//ํฌ๋๋ฆฌ์คํธ ์์ฑ
export const CreateTodoHandler = async (todoData) =>
  await axios.post(`${url}`, todoData);

//ํฌ๋๋ฆฌ์คํธ ์ญ์ 
export const DeleteTodoHandler = async (id) =>
  await axios.delete(`${url}/${id}`);

//ํฌ๋๋ฆฌ์คํธ ์์ 
export const ModifyTodoHandler = async (id, todoinfo) =>
  await axios.put(`${url}/${id}`, todoinfo);

//์ฒดํฌ์ฌ๋ถ ์์ 
export const ToggleTodoHandler = async (id, cheked) =>
  await axios.put(`${url}/${id}`, cheked);
```

## **action.js**

redux์ ์ก์์ด ์ผ์ด๋  ์ก์ ์์ฑ ํจ์๋ฅผ ์ ์ ํ์๋ค.

```javascript
//์กฐํ
export const GetTodoLoading = () => ({
type: type.GET_TODO_LOADING,
});

export const GetTodoSuccess = (data) => ({
type: type.GET_TODO_SUCCESS,
payload: data,
});

...     //์ดํ ์ค๋ต
```

## **actionType.js**

์ก์ ํ์์ ์ ์

```javascript
//์กฐํ
export const GET_TODO_LOADING = "GET_TODO_LOADING";
export const GET_TODO_SUCCESS = "GET_TODO_SUCCESS";
export const GET_TODO_FAIL = "GET_TODO_FAIL";

//์์ฑ
export const CREATE_TODO_LOADING = "CREATE_TODO_LOADING";
export const CREATE_TODO_SUCCESS = "CREATE_TODO_SUCCESS";
export const CREATE_TODO_FAIL = "CREATE_TODO_FAIL";

//์ญ์ 
export const DELETE_TODO_LOADING = "DELETE_TODO_LOADING";
export const DELETE_TODO_SUCCESS = "DELETE_TODO_SUCCESS";
export const DELETE_TODO_FAIL = "DELETE_TODO_FAIL";

//์์ 
export const MODIFY_TODO_LOADING = "MODIFY_TODO_LOADING";
export const MODIFY_TODO_SUCCESS = "MODIFY_TODO_SUCCESS";
export const MODIFY_TODO_FAIL = "MODIFY_TODO_FAIL";

//ํ ๊ธ ์์ 
export const MODIFY_TOGGLE_LOADING = "MODIFY_TOGGLE_LOADING";
export const MODIFY_TOGGLE_SUCCESS = "MODIFY_TOGGLE_SUCCESS";
export const MODIFY_TOGGLE_FAIL = "MODIFY_TOGGLE_FAIL";
```

## **todoSagas.js**

saga ํ์ผ๋ก์
watcher๋ก ์ก์์ ๋ชจ๋ํฐ๋งํ๊ณ , worker๋ก ํจ์๋ฅผ ์คํํ๋ค.

```javascript
/* ---------------------------worker------------------------- */

//์กฐํ
function* GetTodoAsnc() {
try {
  const res = yield call(GetTodoHandler);
  if (res.status === 200) {
    //๋ฐ์ดํฐ๋ฅผ ์ ์์ ์ผ๋ก ๋ฐ์์๋ค๋ฉด
    yield put(GetTodoSuccess(res.data));
  }
} catch (error) {
  yield put(GetTodoFail(error.res.data));
}
}

...     //์ดํ ์ค๋ต

/* ---------------------------watcher------------------------- */
//์กฐํ
function* GetTodoData() {
yield takeEvery(type.GET_TODO_LOADING, GetTodoAsnc);
}

...     //์ดํ์ค๋ต
```

# ๐์ํ๋ค๊ณ  ์๊ฐํ ์ 

reducer.js์์ ๋ฐ๋ณต๋๋ ์ฝ๋๋ค์ ์ญ์ ํ ๊ฒ!

### **๋ณ๊ฒฝ ์ **

```javascript
const todoReducer = (state = initialState, action) => {
  switch (action.type) {
    //์กฐํ
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
    //์์ฑ
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
    //์ญ์ 
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
    //์์ 
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
    //์๋ฃ์ฌ๋ถ
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

### **๋ณ๊ฒฝ ํ**

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
    //์กฐํ
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
    //์์ฑ
    case type.CREATE_TODO_SUCCESS:
      return {
        ...state,
        loading: false,
        todolist: state.todolist.concat(action.payload),
      };

    //์ญ์ 
    case type.DELETE_TODO_SUCCESS:
      return {
        ...state,
        loading: false,
        todolist: state.todolist.filter((item) => item.id !== action.payload),
      };

    //์์ 
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

    //์๋ฃ์ฌ๋ถ
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
