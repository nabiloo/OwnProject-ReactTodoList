import React from "react"

function TodoItem({ todo, deleteTodo, handleClickCheckBox }) {





    return (
        <div className="todoItem">
            <div className="todoText">
                <div className="todoText" style={{ textDecoration: todo.isDone ? "line-through" : null }}>{todo.task}</div>
            </div>
            <div className="todoOptions">

                <input className="checkBox" type="checkbox" onClick={() => handleClickCheckBox(todo.id)} />
                <div className="deleteButton" onClick={() => deleteTodo(todo.id)}>X</div>


            </div>
        </div>
    )


}

export default TodoItem