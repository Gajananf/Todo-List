import React from "react";
import { useState } from "react";
import "./Todo.css";
import { MdCheck, MdDeleteForever } from "react-icons/md";

export const Todo = () => {
  const [Inputval, setInputval] = useState("");
  const [task, setTask] = useState([]);

  const handleInput = (val) => {
    setInputval(val);
  };
  const handleForm = (event) => {
    event.preventDefault(); // to remove by default behavior of form (ie. reseting after every Submit)

    if (!Inputval) return; //condition for not to store empty value.

    if (task.includes(Inputval)) {
      // to check if  value entered is already present in an array .
      setInputval(""); //makes empty
      return;
    }
    setTask((prevTask) => [...prevTask, Inputval]); //using spread operstor to keep previous value.

    setInputval("");
  };

  return (
    <>
      <h1>Todo List </h1>
      <form onSubmit={handleForm}>
        <div className="Todo-class">
          <input
            type="text"
            value={Inputval}
            onChange={(e) => handleInput(e.target.value)}                    /> {/* it refer to value that is typed in input*/}
         
          <button type="submit">Add</button>
        </div>
      </form>
      <section>
        {  /*Map used   diplay elemnt in an  array*/}
        {task.map((curTask, index) => {                     
          
          return (
            <li key={index} className="list">
              <span>{curTask}</span>
              <button>
                <MdCheck />
              </button>
              <button>
                <MdDeleteForever />
              </button>
            </li>
          );
        })}
      </section>
    </>
  );
};
