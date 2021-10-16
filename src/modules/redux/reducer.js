import * as type from "../actionType";

const initialState = {
  todolist: [],
  loading: false,
  error: null,
};

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
      };
    case type.MODIFY_TODO_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default todoReducer;
