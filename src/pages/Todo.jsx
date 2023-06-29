import {useEffect, useState} from 'react';
import TodoLayout from '../layouts/TodoLayout';
import CreateTodo from '../components/todo/CreateTodo/CreateTodo';
import TodoList from '../components/todo/TodoList/TodoList';
import TodoItem from '../components/todo/TodoItem/TodoItem';
import axios from 'axios';
import {getTodoItems} from '../apis/todo';

export default function Todo() {
  const [todoItems, setTodoItems] = useState([]);

  const fetchTodoItems = async () => {
    try {
      const res = await getTodoItems();
      if (res.status === 200) {
        setTodoItems(res.data);
      }
    } catch (error) {
      if (axios.isAxiosError(error)) {
        const axiosError = error;
        if (axiosError.response) {
          // 요청은 성공했지만 서버에서 오류 응답을 반환한 경우
          console.log(axiosError.response.data.message);
        } else if (axiosError.request) {
          // 요청이 이루어졌지만 응답을 받지 못한 경우
          console.log('No response received:', axiosError.request);
        } else {
          // 요청을 보내기 전에 발생한 오류
          console.log('Error during fetch todoItems:', axiosError.message);
        }
      } else {
        console.error('Error during fetch todoItems:', error);
      }
    }
  };

  useEffect(() => {
    fetchTodoItems();
  }, []);

  return (
    <TodoLayout>
      <CreateTodo todoItems={todoItems} setTodoItems={setTodoItems} />
      <TodoList>
        {todoItems &&
          todoItems.map((data, index) => (
            <TodoItem
              key={data.id}
              index={index}
              data={data}
              setTodoItems={setTodoItems}
            />
          ))}
      </TodoList>
    </TodoLayout>
  );
}
