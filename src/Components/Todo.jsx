import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { AddTask } from "../Store/Slice";

const TODO = () => {
  const [task, setTask] = useState("");
  const [debounced, setDebounced] = useState(task);

  const dispatch = useDispatch();
  const taskList = useSelector((state) => state.AddTask.TaskList);

  //debouncing Practice ----Start----
  useEffect(() => {
    const timer = setTimeout(() => {
      setDebounced(task);
    }, 500);
    return () => clearTimeout(timer);
  }, [task]);

  useEffect(()=>{
    if(debounced){
      console.log("yeh aa rha hai : ", debounced)
    }
  },[debounced])
  //debouncing Practice ----End----

  const handleChange = (e) => {
    setTask(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (task.trim() !== "") {
      dispatch(AddTask(task));
      setTask("");
    }
  };
  return (
    <div className="text-center border-2 mx-100 mt-5">
      <h1 className="text-center font-bold text-black bg-white p-5">
        TODO PROJECT USING WITH REDEX
      </h1>
      <input
        className="border-2 p-1"
        type="text"
        name="Todo"
        value={task}
        onChange={handleChange}
      />
      <button
        className="border-2 p-2 mx-5 mb-5 bg-blue-500 text-white font-bold hover:opacity-75"
        onClick={handleSubmit}
      >
        Add Task
      </button>
      
      <ul>
        {taskList.map((t, index) => (
          <li className="font-bold" key={index}>
            {t}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TODO;
