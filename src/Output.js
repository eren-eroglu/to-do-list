import React, { useState, useEffect } from "react";

const Output = (props) => {
  const list = props.todos;
        const idGenerator = () => {
                return 
        }
  return <div className="w-100 d-flex justify-content-center align-items-center align-content-center">
        <section className=" w-75">
                <ul className="list-group">

        {list && list.map((todo, key) => {
                return (
                        <li className="list-group-item" key={key}>{todo}</li>
                )
        })}
        </ul>
        </section>
  </div>;
};

export default Output;
