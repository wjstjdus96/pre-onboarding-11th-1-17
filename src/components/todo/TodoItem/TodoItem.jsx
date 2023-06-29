import { useState } from 'react';
import { deleteTodoItem, updateTodoItem } from '../../../apis/todo';
import { ButtonWrapper, CheckBox, Input, Label, Span, Wrapper } from './TodoItem.style'
import { DELETE, SUBMIT, REVISE, CANCEL } from "../../../constants/const";
import Button from '../../common/Button';
import axios from "axios";


const TodoItem = ({
  data,
  index,
  setTodoItems,
}) => {
  const { id, todo, isCompleted } = data;
  const [isEdit, setIsEdit] = useState(false);
  const [modifyTodoItem, setModifyTodoItem] = useState(todo);

  const handleEdit = () => {
    setIsEdit(!isEdit);
  };


  const submitUpdatedItem = async() => {
    const indexToUpdate = index;
    try {
      const res = await updateTodoItem(id, modifyTodoItem, isCompleted);
      if(res.status === 200) {
        
        setTodoItems( prevTodoItems => prevTodoItems.map((data, index) => {
          if (indexToUpdate === index) {
            return res.data;
          }
          return data;
        }));
        setIsEdit(!isEdit);
      }  
    } catch (error) {
      if (axios.isAxiosError(error)) {
        const axiosError = error;
        if (axiosError.response) {
          // 요청은 성공했지만 서버에서 오류 응답을 반환한 경우
          console.log(axiosError.response.data.message);
        } else if (axiosError.request) {
          // 요청이 이루어졌지만 응답을 받지 못한 경우
          console.log("No response received:", axiosError.request);
        } else {
          // 요청을 보내기 전에 발생한 오류
          console.log("Error during update todoItem:", axiosError.message);
        }
      } else {
        console.error("Error during update todoItem", error);
      }
    }
    
  }
  

  const handleModifyInputChange = (evnet) => {
    setModifyTodoItem(evnet.target.value);
  }

  const handleCheckboxChange = async(event) => {
    const checked = event.target.checked;
    const indexToUpdate = index;
    try {
      const res = await updateTodoItem(id, todo, checked);
      if(res.status === 200) {
        
        setTodoItems( prevTodoItems => prevTodoItems.map((data, index) => {
          if (indexToUpdate === index) {
            return res.data;
          }
          return data;
        }));
      }
    } catch (error) {
      if (axios.isAxiosError(error)) {
        const axiosError = error;
        if (axiosError.response) {
          // 요청은 성공했지만 서버에서 오류 응답을 반환한 경우
          console.log(axiosError.response.data.message);
        } else if (axiosError.request) {
          // 요청이 이루어졌지만 응답을 받지 못한 경우
          console.log("No response received:", axiosError.request);
        } else {
          // 요청을 보내기 전에 발생한 오류
          console.log("Error during update check:", axiosError.message);
        }
      } else {
        console.error("Error during update check", error);
      }
    }
    
  }

  const deleteTodoItemButonClick = async() => {
    try {
      const res = await deleteTodoItem(id);
      const indexToDelete = index;
      if (res.status === 204) {
        setTodoItems( prevTodoItems => prevTodoItems.filter((_, index) => index !== indexToDelete));
      }
    } catch (error) {
      if (axios.isAxiosError(error)) {
        const axiosError = error;
        if (axiosError.response) {
          // 요청은 성공했지만 서버에서 오류 응답을 반환한 경우
          console.log(axiosError.response.data.message);
        } else if (axiosError.request) {
          // 요청이 이루어졌지만 응답을 받지 못한 경우
          console.log("No response received:", axiosError.request);
        } else {
          // 요청을 보내기 전에 발생한 오류
          console.log("Error during delete todoItem:", axiosError.message);
        }
      } else {
        console.error("Error during delete todoItem:", error);
      }
    }
    
  }

  

  return (
    <Wrapper>
      <Label>
        <CheckBox
          name={String(index)}
          type="checkbox"
          checked={isCompleted}
          onChange={handleCheckboxChange}
        />
        {!isEdit ? <Span>{todo}</Span> : <Input data-testid="modify-input" defaultValue={todo} onChange={handleModifyInputChange}/>}
      </Label>
      <ButtonWrapper>
        {!isEdit ? (
          <>
            <Button testId={"modify-button"} text={REVISE} onClick={handleEdit} style={{ padding: '8px 12px'}}/>
            <Button testId={"delete-button"} text={DELETE} onClick={deleteTodoItemButonClick} style={{ marginLeft: '10px', padding: '8px 12px'}}/>
          </>
        ) : (
          <>
            <Button testId={"submit-button"} text={SUBMIT} style={{ padding: '8px 12px'}} onClick={submitUpdatedItem}/>
            <Button testId={"cancel-button"} text={CANCEL} style={{ marginLeft: '10px', padding: '8px 12px'}} onClick={handleEdit}/>
          </>
        )}
      </ButtonWrapper>
    </Wrapper>
  );
};

export default TodoItem;
