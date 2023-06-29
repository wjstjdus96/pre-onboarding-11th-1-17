import {getToken} from '../utils/checkToken';
import {axiosClient} from './axiosClient';

export const getTodoItems = async () => {
  const accessToken = getToken();
  axiosClient.defaults.headers['Authorization'] = `Bearer ${accessToken}`;
  return await axiosClient.get('/todos');
};

export const createTodoItem = async todoItem => {
  return await axiosClient.post('/todos', {todo: todoItem});
};

export const deleteTodoItem = async id => {
  return await axiosClient.delete(`/todos/${id}`);
};

export const updateTodoItem = async (id, todo, isCompleted) => {
  return await axiosClient.put(`/todos/${id}`, {todo, isCompleted});
};
