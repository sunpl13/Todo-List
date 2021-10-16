import {
  takeEvery,
  takeLatest,
  put,
  all,
  delay,
  take,
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
} from "../modules/action";
import {
  GetTodoHandler,
  CreateTodoHandler,
  DeleteTodoHandler,
  ModifyTodoHandler,
} from "../api";

/* ---------------------------worker------------------------- */

//조회
function* GetTodoAsnc() {
  try {
    const res = yield call(GetTodoHandler);
    if (res.status === 200) {
      //데이터를 정상적으로 받아왔다면
      yield delay(300); //0.3초 딜레이
      yield put(GetTodoSuccess(res.data)); //
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
    if (res.status === 200) {
      //데이터를 정상적으로 받아왔다면

      yield put(CreateTodoSuccess(res.data)); //
    }
  } catch (error) {
    yield put(CreateTodoFail(error.res.data));
  }
}

//삭제
function* DeleteTodoAsnc(id) {
  //매개변수로 data 전달
  try {
    const res = yield call(DeleteTodoHandler, id);
    if (res.status === 200) {
      //데이터를 정상적으로 받아왔다면
      yield delay(300);
      yield put(DeleteTodoSuccess(res.data)); //
    }
  } catch (error) {
    yield put(DeleteTodoFail(error.res.data));
  }
}

//수정
function* ModifyTodoAsnc({ payload: { id, content } }) {
  try {
    console.log("id :", id, "content : ", content);
    const res = yield call(ModifyTodoHandler, id, content);
    if (res.status === 200) {
      yield put(ModifyTodoSuccess());
    }
  } catch (err) {
    yield put(ModifyTodoFail(err.res.data));
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
  while (true) {
    const { payload: id } = yield take(type.DELETE_TODO_LOADING);
    yield call(DeleteTodoHandler, id);
  }
}

//수정
function* ModifyTodo() {
  yield takeLatest(type.MODIFY_TODO_LOADING, ModifyTodoAsnc);
}

const todoSagas = [
  fork(GetTodoData),
  fork(CreateTodo),
  fork(DeleteTodo),
  fork(ModifyTodo),
];

export default function* rootSaga() {
  yield all([...todoSagas]);
}
