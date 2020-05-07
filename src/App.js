import React, { useState } from 'react';
import './App.css';


import InputField from "./components/InputField"
import TodoList from "./components/TodoList"

function App() {
  const [todos, setTodos] = useState([])

  const addTodo = (todo) => {
    setTodos([todo, ...todos])
  }


  const deleteTodo = (id) => {
    setTodos(todos.filter(todo => todo.id !== id))
  }

  const handleClickCheckBox = (id) => {
    setTodos(
      todos.map(todo => {

        if (todo.id === id) {
          return {
            ...todo, isDone: !todo.isDone
          }
        }
        return todo
      })
    )
  }


  return (
    <div className="App">
      <h1 className="title">My ToDo</h1>
      <InputField addTodo={addTodo} />
      <TodoList todos={todos} deleteTodo={deleteTodo} handleClickCheckBox={handleClickCheckBox} />

    </div>
  );
}

export default App;
