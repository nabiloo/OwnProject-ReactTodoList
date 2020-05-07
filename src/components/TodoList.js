import React from "react"
import TodoItem from "./TodoItem"

function TodoList({ todos, deleteTodo, handleClickCheckBox }) {


    const listOfTodos = todos.map((todo) => <TodoItem key={todo.id} todo={todo}
        deleteTodo={deleteTodo}
        handleClickCheckBox={handleClickCheckBox} />)

    console.log(listOfTodos)

    return (
        <div>
            {listOfTodos}
        </div>
    )


}

export default TodoList



