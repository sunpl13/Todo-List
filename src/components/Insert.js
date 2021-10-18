import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import "../css/insert.css";
import { CreateTodoLoading } from "../modules/action";

function Insert() {
  const dispatch = useDispatch();
  const [todo, settodo] = useState("");
  const date = new Date();
  const list = useSelector((state) => state.todo.todolist);
  const onchangeHandler = (e) => {
    settodo(e.target.value);
  };

  //  todolist 생성 함수
  const insertHandler = () => {
    dispatch(
      CreateTodoLoading({
        id: list.length === 0 ? 0 : list[list.length - 1].id + 1, //배열의 마지막 인덱스의 id 값에서 +1
        content: todo,
        createdAt: date,
        isCheck: false,
      })
    );
    settodo("");
  };
  return (
    <div className="form">
      <input type="text" onChange={onchangeHandler} />
      <button className="add_btn" onClick={() => insertHandler()}>
        추가하기
      </button>
    </div>
  );
}

export default Insert;
