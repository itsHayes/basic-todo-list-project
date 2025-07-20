import { useEffect, useState } from "react";
import classes from './style.module.css';
import TodoItem from "./components/todo-item";

function App() {
  const [loading, setLoading] = useState(false);
  const [todoList, setTodoList] = useState([]);
  const [error, setErrorMsg] = useState(null);
  const [todoDetails, setTodoDetails] = useState(null);
  const [openDialog, setOpenDialog] = useState(false);

  async function fetchListofTodos() {
    try {
      setLoading(true);
      const apiResponse = await fetch('https://dummyjson.com/todos');
      const result = await apiResponse.json();
      console.log("Fetched todos:", result);

      if (result?.todos?.length > 0) {
        setTodoList(result.todos);
        setErrorMsg('');
      } else {
        setTodoList([]);
        setErrorMsg('No todos found.');
      }

    } catch (e) {
      console.error("Error fetching todos:", e);
      setErrorMsg('Some error occurred');
    } finally {
      setLoading(false);
    }
  }
async function fetchDetailsOfCurrentTodo(getCurrentTodoId){
  console.log(getCurrentTodoId);

  try{
    const apiResponse = await fetch('https://dummyjson.com/todos/${getCurrentTodoId}')
    const result = await apiResponse.json();
    console.log(result);

  }catch(error){
    console.log(error);
  }
}

  useEffect(() => {
    fetchListofTodos();
  }, []);

  return (
    <div className={classes.mainWrapper}>
      <h1 className={classes.headerTitle}>Simple TODO APP Using Material UI</h1>

      {loading && <p>Loading todos...</p>}
      {error && <p style={{ color: "red" }}>{error}</p>}

      <div className={classes.todoListWrapper}>
        {
          todoList.length > 0 &&
          todoList.map((todoItem) => (
            <TodoItem fetchDetailsOfCurrentTodo={fetchDetailsOfCurrentTodo} todo={todoItem} />

          ))
        }
      </div>
    </div>
  );
}

export default App;
