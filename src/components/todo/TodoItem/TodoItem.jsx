import { useState } from 'react';
import { deleteTodoItem, updateTodoItem } from '../../../apis/todo';
import { Button, ButtonWrapper, CheckBox, Input, Label, Span, Wrapper } from './TodoItem.style'


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
  }
  

  const handleModifyInputChange = (evnet) => {
    setModifyTodoItem(evnet.target.value);
  }

  const handleCheckboxChange = async(event) => {
    const checked = event.target.checked;
    const indexToUpdate = index;
    const res = await updateTodoItem(id, todo, checked);
    if(res.status === 200) {
      
      setTodoItems( prevTodoItems => prevTodoItems.map((data, index) => {
        if (indexToUpdate === index) {
          return res.data;
        }
        return data;
      }));
    }
  }

  const deleteTodoItemButonClick = async() => {
    const res = await deleteTodoItem(id);
    const indexToDelete = index;
    if (res.status === 204) {
      setTodoItems( prevTodoItems => prevTodoItems.filter((_, index) => index !== indexToDelete));
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
            <Button data-testid="modify-button" onClick={handleEdit}>
              수정
            </Button>
            <Button
              data-testid="delete-button"
              onClick={deleteTodoItemButonClick}
            >
              삭제
            </Button>
          </>
        ) : (
          <>
            <Button data-testid="submit-button" onClick={submitUpdatedItem}>제출</Button>
            <Button data-testid="cancel-button" onClick={handleEdit}>
              취소
            </Button>
          </>
        )}
      </ButtonWrapper>
    </Wrapper>
  );
};

export default TodoItem;
