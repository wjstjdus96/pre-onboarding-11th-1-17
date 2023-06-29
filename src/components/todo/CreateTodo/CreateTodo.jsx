import { useState } from "react";
import { Button, Input, Wrapper } from "./CreateTodo.style";
import { createTodoItem } from "../../../apis/todo";
import { ADD } from "../../../constants/const";

const CreateTodo = ({ todoItems, setTodoItems }) => {

    const [newTodoItem, setNewTodoItem] = useState('');


    const createTodoInputChange = (event) => {
      setNewTodoItem(event.target.value);
    }

    const createTodoItemButtonClick = async() => {
      const res = await createTodoItem(newTodoItem);
      if (res.status === 201){
        setTodoItems([...todoItems, res.data]);
        setNewTodoItem('');
      }
    }

    return (
      <Wrapper>
        <Input data-testid="new-todo-input" value={newTodoItem} onChange={createTodoInputChange}/>
        <Button data-testid="new-todo-add-button" onClick={createTodoItemButtonClick}>{ADD}</Button>
      </Wrapper>
    );
  };
  
  export default CreateTodo;
  