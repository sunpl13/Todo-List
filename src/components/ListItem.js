import React from "react";
import "../css/list_item.css";

function ListItem(props) {
  const { text, checked, id, todolist, onToggle, onRemove } = props;
  return (
    <div className="todo_item" onClick={() => onToggle(id)}>
      <div
        className="remove"
        onClick={(e) => {
          e.stopPropagation(); //이벤트 확산 방지(부모 onToggle 함수 실행 x)
          onRemove(id);
        }}
      ></div>
      <div className={`todo_content ${checked ? "checked" : ""}`}>
        <div>{text}</div>
      </div>
      {checked && <div className="check-mark">✓</div>}
    </div>
  );
}

export default ListItem;
