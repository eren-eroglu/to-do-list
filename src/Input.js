import React, { useState } from "react";
import Output from "./Output";
import reactImg from "./img/reactLogo.svg";
const Input = (props) => {
  const [task, setTask] = useState("");
  const [todos, setTodos] = useState([]);
  const [id, setId] = useState([]);
  const handleSubmit = (e) => {
    e.preventDefault();

    setTodos([...todos, task]);

    setId([...id, generateId()]);
    console.log(todos);
    console.log(id);
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
          <div className="d-flex ">
          <div className="form-group w-100 text-center">
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
        <div className="btn_div m-2 p-0" style={{height:'300px'}}>
          <button type="submit" className="btn btn-primary btn_submit">
            <img src={reactImg} style={{ height: "25px" }}></img> Add Task
          </button>
          </div>
          </div>
        </form>
      </div>
      <Output todos={todos} key={id}></Output>
    </>
  );
};

export default Input;
