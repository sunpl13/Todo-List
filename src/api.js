import axios from "axios";

//투두리스트 데이터 가져오기
export const GetTodoHandler = async () =>
  await axios.get("http://localhost:4000/todoList");

//투두리스트 생성
export const CreateTodoHandler = async (todoData) =>
  await axios.post("http://localhost:4000/todoList", todoData);

//투두리스트 삭제
export const DeleteTodoHandler = async (id) =>
  await axios.delete(`http://localhost:4000/todoList/${id}`);

//투두리스트 수정
export const ModifyTodoHandler = async (id, todoinfo) =>
  await axios.put(`http://localhost:4000/todoList/${id}`, todoinfo);

//체크여부 수정
export const ToggleTodoHandler = async (id, cheked) =>
  await axios.put(`http://localhost:4000/todoList/${id}`, cheked);
