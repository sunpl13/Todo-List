import React, { useState } from "react";
import "../css/list_item.css";

function ListItem(props) {
  const {
    text,
    checked,
    id,
    onToggle,
    onRemove,
    active,
    setactive,
    onChange,
    date,
  } = props;
  const [NewTodo, setNewTodo] = useState(""); //변경할 todo content 명

  //input 토글 하나만 바꾸는 함수
  const editToggleHandler = () => {
    setactive(id);
    if (active === id) {
      setactive(-1);
    }
  };

  //바꿀 명 저장 state
  const changeInputHandler = (e) => {
    setNewTodo(e.target.value);
  };

  return (
    <div className="todo_item" onClick={() => onToggle(id)}>
      <div
        className="remove"
        onClick={(e) => {
          e.stopPropagation(); //이벤트 확산 방지(부모 onToggle 함수 실행 x)
          onRemove(id);
        }}
      >
        x
      </div>
      <div className={`todo_content ${checked ? "checked" : ""}`}>
        <div className="change_todo">
          <div>
            {active === id ? (
              <input
                type="text"
                defaultValue={text || NewTodo}
                onChange={changeInputHandler}
                onClick={(e) => {
                  e.stopPropagation();
                }}
              />
            ) : (
              text
            )}
          </div>
        </div>
      </div>
      {active === id ? (
        NewTodo === "" || NewTodo === text ? ( //아무것도 입력하지 않거나 값이 기존 값과 동일하다면
          <div //아이콘을 동일하게 보여줌
            className="edit"
          >
            <div className="date">{active === id ? "" : date}</div>
            <img
              src={process.env.PUBLIC_URL + "/images/edit.png"}
              alt="수정버튼"
              onClick={(e) => {
                e.stopPropagation();
                editToggleHandler();
              }}
            />
          </div>
        ) : (
          //입력이 있다면 값을 다르게 보여줌
          <div className="edit">
            <img
              src={process.env.PUBLIC_URL + "/images/check.png"}
              width="20"
              height="20"
              alt="수정확인 버튼"
              onClick={(e) => {
                e.stopPropagation();
                onChange(id, NewTodo);
                editToggleHandler();
              }}
            />
          </div>
        )
      ) : (
        <div className="edit">
          <div className="date">{active === id ? "" : date}</div>
          <img
            src={process.env.PUBLIC_URL + "/images/edit.png"}
            alt="수정버튼"
            onClick={(e) => {
              e.stopPropagation();
              editToggleHandler();
            }}
          />
        </div>
      )}
      {checked && <div className="check-mark">✓</div>}
    </div>
  );
}

export default ListItem;
