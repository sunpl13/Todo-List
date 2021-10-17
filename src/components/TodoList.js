import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  DeleteTodoLoading,
  GetTodoLoading,
  ModifyTodoLoading,
} from "../modules/action";
import ListItem from "./ListItem";

function TodoList() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(GetTodoLoading());
  }, [dispatch]);

  const todolist = useSelector((state) => state.todo.todolist);
  console.log(todolist);

  const toggleHandler = (id) => {
    const idx = todolist.findIndex((todo) => todo.id === id); //준 아이디와 같은 인덱스 찾기
  };

  const onRemove = (id) => {
    dispatch(DeleteTodoLoading(id));
  };
  const list = todolist.map((item) => {
    return (
      <ListItem
        text={item.content}
        key={item.id}
        checked={item.isCheck}
        id={item.id}
        onRemove={onRemove}
      />
    );
  });
  //useeffect로 투두 배열 받기
  return <div>{list}</div>;
}

export default TodoList;
