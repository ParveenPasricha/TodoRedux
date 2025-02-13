import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { AddTask } from "../Store/Slice";

const TODO = () => {
  const [task, setTask] = useState("");
  const [debounced, setDebounced] = useState(task);
  const [suggestion, setSuggestion]= useState([])

  const dispatch = useDispatch();
  const taskList = useSelector((state) => state.AddTask.TaskList);
  const data = ["mobile", "laptop", "tv", "bike", "car", "keyboard"];

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
      const filterSuggestion = data.filter((item)=>
        item.toLowerCase().includes(debounced.toLowerCase())
    )
    setSuggestion(filterSuggestion)
    }
    else{
      setSuggestion([])
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
  const handleSuggestionlist=(selectedItem)=>{
    setTask(selectedItem); // ✅ Set clicked suggestion in input
    setSuggestion([])
  };
  return (
    <div className="text-center border-2 sm:mx-20 lg:mx-100 mt-5">
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
      
      {suggestion.length > 0 && (
         <ul className="text-left bg-gray-200 p-2 w-1/2 mx-auto rounded-lg">
         {suggestion.map((s, index) => (
           <li key={index} className="p-1 hover:bg-gray-300 cursor-pointer" onClick={()=> handleSuggestionlist(s)}>
             {s}
           </li>
         ))}
       </ul>
      )}

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
