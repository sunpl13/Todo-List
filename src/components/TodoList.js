import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { GetTodoLoading } from "../modules/action";

function TodoList() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(GetTodoLoading());
  }, []);
  //useeffect로 투두 배열 받기
  return <div>투두리스트</div>;
}

export default TodoList;
