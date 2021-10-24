import {
  takeEvery,
  takeLatest,
  put,
  all,
  delay,
  fork,
  call,
} from "redux-saga/effects";

import * as type from "../modules/actionType";
import {
  GetTodoSuccess,
  GetTodoFail,
  CreateTodoSuccess,
  CreateTodoFail,
  DeleteTodoSuccess,
  DeleteTodoFail,
  ModifyTodoSuccess,
  ModifyTodoFail,
  ModifyToggleSuccess,
  ModifyToggleFail,
} from "../modules/action";
import {
  GetTodoHandler,
  CreateTodoHandler,
  DeleteTodoHandler,
  ModifyTodoHandler,
  ToggleTodoHandler,
} from "../api";

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

//생성
function* CreateTodoAsnc({ payload }) {
  //매개변수로 data 전달
  try {
    const res = yield call(CreateTodoHandler, payload);
    console.log(res);
    //status 값에 따라 200으로 변경
    if (res.status === 201) {
      //데이터를 정상적으로 받아왔다면

      yield put(CreateTodoSuccess(res.data)); //
    }
  } catch (error) {
    yield put(CreateTodoFail(error.res.data));
  }
}

//삭제
function* DeleteTodoAsnc({ payload }) {
  //매개변수로 data 전달
  console.log(payload);
  try {
    const res = yield call(DeleteTodoHandler, payload);
    console.log(res);
    if (res.status === 200) {
      //데이터를 정상적으로 받아왔다면

      yield delay(300);
      yield put(DeleteTodoSuccess(payload)); //
    }
  } catch (error) {
    yield put(DeleteTodoFail(error.res.data));
  }
}

//수정
function* ModifyTodoAsnc({ payload }) {
  console.log(payload);
  try {
    const res = yield call(ModifyTodoHandler, payload.id, payload);
    console.log(res);
    if (res.status === 200) {
      yield put(ModifyTodoSuccess(res.data));
    }
  } catch (err) {
    yield put(ModifyTodoFail(err.res.data));
  }
}

//체크여부
function* ToggleTodoAsnc({ payload }) {
  //매개변수로 data 전달
  console.log(payload);
  try {
    const res = yield call(ToggleTodoHandler, payload.id, payload);
    console.log(res);
    if (res.status === 200) {
      //데이터를 정상적으로 받아왔다면
      yield delay(300);
      yield put(ModifyToggleSuccess(res.data)); //
    }
  } catch (error) {
    yield put(ModifyToggleFail(error.res.data));
  }
}

/* ---------------------------watcher------------------------- */
//조회
function* GetTodoData() {
  yield takeEvery(type.GET_TODO_LOADING, GetTodoAsnc);
}

//생성
function* CreateTodo() {
  yield takeLatest(type.CREATE_TODO_LOADING, CreateTodoAsnc);
}

//삭제
function* DeleteTodo() {
  yield takeEvery(type.DELETE_TODO_LOADING, DeleteTodoAsnc);
}

//수정
function* ModifyTodo() {
  yield takeLatest(type.MODIFY_TODO_LOADING, ModifyTodoAsnc);
}

//체크여부 수정
function* ToggleTodo() {
  yield takeEvery(type.MODIFY_TOGGLE_LOADING, ToggleTodoAsnc);
}

const todoSagas = [
  fork(GetTodoData),
  fork(CreateTodo),
  fork(DeleteTodo),
  fork(ModifyTodo),
  fork(ToggleTodo),
];

export default function* rootSaga() {
  yield all([...todoSagas]);
}
