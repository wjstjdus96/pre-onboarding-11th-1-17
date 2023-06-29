import { useEffect, useState } from "react";
import TodoLayout from "../layouts/TodoLayout";
import CreateTodo from "../components/todo/CreateTodo/CreateTodo";
import TodoList from "../components/todo/TodoList/TodoList";
import TodoItem from "../components/todo/TodoItem/TodoItem";
import { getTodoItems } from "../apis/todo";

 

export default function Todo() {

  const [todoItems, setTodoItems] = useState([]);


  const fetchTodoItems = async() => {
    const res = await getTodoItems();
    if (res.status === 200) {
      setTodoItems(res.data);
    }
  }

  
  useEffect(() => {
    fetchTodoItems();
  }, []);


  return (
      <TodoLayout>
          <CreateTodo todoItems={todoItems}  setTodoItems={setTodoItems} />
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
