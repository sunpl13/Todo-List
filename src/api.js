import axios from "axios";

//투두리스트 데이터 가져오기
export const GetTodoHandler = async () =>
  await axios.get("http://localhost:4000/todoList");

export const CreateTodoHandler = async (todoData) =>
  await axios.post("http://localhost:4000/todoList", todoData);

export const DeleteTodoHandler = async (id) =>
  await axios.delete(`http://localhost:4000/todoList/${id}`);

export const ModifyTodoHandler = async (id, todoinfo) =>
  await axios.put(`http://localhost:4000/todoList/${id}`, todoinfo);
