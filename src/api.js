import axios from "axios";

const url = process.env.REACT_APP_URL;

//투두리스트 데이터 가져오기
export const GetTodoHandler = async () => await axios.get(`${url}`);

//투두리스트 생성
export const CreateTodoHandler = async (todoData) =>
  await axios.post(`${url}`, todoData);

//투두리스트 삭제
export const DeleteTodoHandler = async (id) =>
  await axios.delete(`${url}/${id}`);

//투두리스트 수정
export const ModifyTodoHandler = async (id, todoinfo) =>
  await axios.put(`${url}/${id}`, todoinfo);

//체크여부 수정
export const ToggleTodoHandler = async (id, cheked) =>
  await axios.put(`${url}/${id}`, cheked);
