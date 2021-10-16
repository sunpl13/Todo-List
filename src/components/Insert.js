import React, { useState } from "react";
import "../css/insert.css";

function Insert() {
  const [todo, settodo] = useState("");
  const onchangeHandler = (e) => {
    settodo(e.target.value);
  };
  return (
    <div className="form">
      <input type="text" onChange={onchangeHandler} />
      <button className="add_btn">추가하기</button>
    </div>
  );
}

export default Insert;
