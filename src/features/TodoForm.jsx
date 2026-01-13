import { use, useRef, useState } from "react";
import TextInputWithLabel from "../shared/TextInputWithLabel";
import { isValidTodoTitle } from '../utils/todoValidation';

const TodoForm = ({ onAddTodo }) => {

  const [workingTodoTitle, setWorkingTodoTitle] = useState("")


  const inputRef = useRef();
  const handleAddTodo = (event) => {
    event.preventDefault();

    event.target.reset();
    onAddTodo(workingTodoTitle);

    inputRef.current.focus();
    setWorkingTodoTitle("")

  };


  return (
    <form onSubmit={handleAddTodo}>
      <TextInputWithLabel ref={inputRef} value={workingTodoTitle} onChange={(e) => setWorkingTodoTitle(e.target.value)} id="todoTitle" labelText={"Todo"} />

      <button disabled={!isValidTodoTitle(workingTodoTitle)}>Add Todo</button>
    </form>
  );
}

export default TodoForm;
