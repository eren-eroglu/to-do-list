import React, { useState, useEffect } from "react";

const Output = (props) => {
        const [list, setList] = useState(props.todos);
        const handleRemove = (index) => {
          setList((prevList) => prevList.filter((_, i) => i !== index));
        };
      
        return (
          <div className="w-100 d-flex justify-content-center align-items-center align-content-center">
            <section className="w-75">
              <ul className="list-group">
                {list &&
                  list.map((todo, index) => (
                    <div key={index} className="d-flex justify-content-between">
                      <li className="list-group-item">{todo}</li>
                      <button className={`btn btn-secondary`} onClick={() => handleRemove(index)}>
                        Remove
                      </button>
                    </div>
                  ))}
              </ul>
            </section>
          </div>
        );
      };
      
export default Output;
