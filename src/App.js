import "./css/App.css";
import React from "react";
import Insert from "./components/Insert";
import TodoList from "./components/TodoList";

function App() {
  return (
    <div className="App">
      <div className="Todolist">
        <div className="title">To Do List!</div>
        <div className="insert">
          <Insert />
        </div>
        <div className="list-container">
          <TodoList />
        </div>
      </div>
    </div>
  );
}

export default App;
