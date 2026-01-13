
import { useState } from 'react';
import './App.css'


import TodoForm from './features/TodoForm';
import TodoList from './features/TodoList/TodoList';




function App() {

  const [todoList, setTodoList] = useState([])

  const addTodo = (todoTitle) => {
    const newTodo = {
      id: Date.now(),
      title: todoTitle,
      isCompleted: false,
    }

    setTodoList([newTodo, ...todoList])
  }
  const updateTodo = (editedTodo) => {
    const updatedTodos = todoList.map((todo) => {
      if (todo.id === editedTodo.id) {
        return { ...editedTodo };
      }
      return todo;
    });

    setTodoList(updatedTodos);
  };


  const completeTodo = (id) => {
    const updatedTodoList = todoList.map((todo) => {
      if (todo.id === id) {
        return { ...todo, isCompleted: true }
      }
      return todo
    })


    setTodoList(updatedTodoList)
  }


  return (
    <div>
      <h1>Todo List</h1>

      <TodoForm onAddTodo={addTodo} />

      <TodoList
        todoList={todoList}
        onUpdateTodo={updateTodo}
        onCompleteTodo={completeTodo}
      />

    </div>
  );
}

export default App
