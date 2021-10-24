import * as type from "../actionType";

const initialState = {
  todolist: [],
  loading: false,
  error: null,
};

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

export default todoReducer;
