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
    //이미 추가된 리스트에 추가할 값이 있는지 확인
    if (list.some((item) => item.content === todo)) {
      alert("리스트에 이미 추가되어 있습니다!");
    } else {
      //id 값이 주어지지 않을 때
      dispatch(
        CreateTodoLoading({
          id: list.length === 0 ? 0 : list[list.length - 1].id + 1, //배열의 마지막 인덱스의 id 값에서 +1
          content: todo,
          createdAt: date,
          isCheck: false,
        })
      );
      /*     id 값이 주어졌을 때
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
