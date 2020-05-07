import React, { useState } from "react"
import { v4 as uuidv4 } from 'uuid';

function InputField({ addTodo }) {
    const [todo, setTodo] = useState({
        id: "",
        task: "",
        isDone: false,
    })

    const handleChangeInputForm = (event) => {
        setTodo({ ...todo, task: event.target.value })
    }


    const handleSubmit = (event) => {
        event.preventDefault()
        if (todo.task.trim()) {
            addTodo({ ...todo, id: uuidv4() })
            setTodo({ ...todo, task: "" })
        }
    }


    return (
        <div>
            <form className="form" onSubmit={handleSubmit}>
                <input
                    className="formInput"
                    type="text"
                    name="task"
                    value={todo.task}
                    placeholder="Add a todo..."
                    onChange={handleChangeInputForm}

                />
                <button className="formButton"

                    type="submit"
                >+</button>
            </form>
        </div>
    )
}

export default InputField