import React, { useState } from "react";
import { useDispatch } from "react-redux";
import "../css/insert.css";
import { CreateTodoLoading } from "../modules/action";

function Insert() {
  const dispatch = useDispatch();
  const [todo, settodo] = useState("");
  const date = new Date();
  const onchangeHandler = (e) => {
    settodo(e.target.value);
  };

  const insertHandler = () => {
    dispatch(
      CreateTodoLoading({
        id: 6,
        content: todo,
        createdAt: date,
        isCheck: false,
      })
    );
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
