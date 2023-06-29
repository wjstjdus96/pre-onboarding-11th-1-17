import {useState} from 'react';
import {Input, Wrapper} from './CreateTodo.style';
import {createTodoItem} from '../../../apis/todo';
import {ADD} from '../../../constants/const';
import Button from '../../common/Button';
import axios from 'axios';

const CreateTodo = ({todoItems, setTodoItems}) => {
  const [newTodoItem, setNewTodoItem] = useState('');

  const createTodoInputChange = event => {
    setNewTodoItem(event.target.value);
  };

  const createTodoItemButtonClick = async () => {
    try {
      const res = await createTodoItem(newTodoItem);
      if (res.status === 201) {
        setTodoItems([...todoItems, res.data]);
        setNewTodoItem('');
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
          console.log('Error during creatTodo:', axiosError.message);
        }
      } else {
        console.error('Error during creatTodo:', error);
      }
    }
  };

  return (
    <Wrapper>
      <Input
        data-testid="new-todo-input"
        value={newTodoItem}
        onChange={createTodoInputChange}
      />
      <Button
        testId={'new-todo-add-button'}
        text={ADD}
        style={{marginLeft: '10px'}}
        onClick={createTodoItemButtonClick}
      />
    </Wrapper>
  );
};

export default CreateTodo;
