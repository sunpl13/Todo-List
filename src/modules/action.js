import * as type from "./actionType";

//조회
export const GetTodoLoading = () => ({
  type: type.GET_TODO_LOADING,
});

export const GetTodoSuccess = (data) => ({
  type: type.GET_TODO_SUCCESS,
  payload: data,
});

export const GetTodoFail = (err) => ({
  type: type.GET_TODO_FAIL,
  payload: err,
});

//생성
export const CreateTodoLoading = (data) => ({
  type: type.CREATE_TODO_LOADING,
  payload: data,
});

export const CreateTodoSuccess = (data) => ({
  type: type.CREATE_TODO_SUCCESS,
  payload: data,
});

export const CreateTodoFail = (err) => ({
  type: type.CREATE_TODO_FAIL,
  payload: err,
});

//삭제
export const DeleteTodoLoading = (id) => ({
  type: type.DELETE_TODO_LOADING,
  payload: id,
});

export const DeleteTodoSuccess = (id) => ({
  type: type.DELETE_TODO_SUCCESS,
  payload: id,
});

export const DeleteTodoFail = (err) => ({
  type: type.DELETE_TODO_FAIL,
  payload: err,
});

//수정
export const ModifyTodoLoading = (todoinfo) => ({
  type: type.MODIFY_TODO_LOADING,
  payload: todoinfo,
});

export const ModifyTodoSuccess = (todoinfo) => ({
  type: type.MODIFY_TODO_SUCCESS,
  payload: todoinfo,
});

export const ModifyTodoFail = (err) => ({
  type: type.MODIFY_TODO_FAIL,
  payload: err,
});

//토글 수정(완료여부)
export const ModifyToggleLoading = (id) => ({
  type: type.MODIFY_TOGGLE_LOADING,
  payload: id,
});

export const ModifyToggleSuccess = (data) => ({
  type: type.MODIFY_TOGGLE_SUCCESS,
  payload: data,
});

export const ModifyToggleFail = (err) => ({
  type: type.MODIFY_TOGGLE_FAIL,
  payload: err,
});
