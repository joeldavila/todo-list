import { useRef, useState } from "react";

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
      <label htmlFor="todoTitle">Todo</label>
      <input
        type="text"
        id="todoTitle"
        name="todoTitle"
        value={workingTodoTitle}
        onChange={(e) => setWorkingTodoTitle(e.target.value)}
        ref={inputRef}
        required
      />
      <button disabled={!workingTodoTitle.trim()} type="submit">Add Todo</button>
    </form>
  );
}

export default TodoForm;
