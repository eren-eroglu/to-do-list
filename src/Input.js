import React, { useState } from "react";

const Input = (props) => {
        const [task, setTask] = useState('')
        const [todos, setTodos] = useState([])
        const handleSubmit = (e) => {
                e.preventDefault()
               todos.push(task)
               console.log(todos)
               
        }
  return (
    <div className="d-flex justify-content-center align-items-center align-content-center">
      <form className="w-75 d-flex justify-content-center align-items-center" onSubmit={handleSubmit}>
        <div className="form-group w-75 text-center">
          <label htmlFor="addToDo">Add To-do</label>
          <input
            type="todo"
            className="form-control"
            id="exampleTodo"
            aria-describedby="todoHelp"
            placeholder="Enter Task"
            value={task}
            onChange={(e) => setTask(e.target.value) }
          />
          <small id="todoHelp" className="form-text text-muted">
            The secret of getting ahead is getting started.
          </small>
        </div>

        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Input;
