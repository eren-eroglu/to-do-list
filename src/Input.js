import React, { useState } from "react";
import Output from "./Output";
const Input = (props) => {
  const [task, setTask] = useState("");
  const [todos, setTodos] = useState([]);
  const [id, setId] = useState([]);
  const handleSubmit = (e) => {
    e.preventDefault();

    setTodos([...todos, task]);

    setId([...id, generateId()])
    console.log(todos);
    console.log(id)
  };
  const generateId = () => {
    return Math.random();
  };

  return (
    <>
      <div className="d-flex justify-content-center align-items-center align-content-center mt-3">
        <form
          className="w-75 d-flex justify-content-center align-items-center"
          onSubmit={handleSubmit}
        >
          <div className="form-group w-75 text-center">
                
            <label htmlFor="addToDo">Add To-do</label>
            <input
              type="todo"
              className="form-control"
              id="exampleTodo"
              aria-describedby="todoHelp"
              placeholder="Enter Task"
              value={task}
              
              onChange={(e) => setTask(e.target.value)}
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
      <Output todos={todos} key={id}></Output>
    </>
  );
};

export default Input;
