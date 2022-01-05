import React from "react";
import Task from "./Task"; 

function TaskList({ tasks, handleRemove, selected }) {
  let tasksToDisplay = tasks.filter((task) => {
      if (selected === 'All') return true;

      return task.category === selected;
    })
  
  return (
    <div className="tasks">
      {tasksToDisplay.map((task) => {
        return <Task key={task.text} text={task.text} category={task.category} handleRemove={handleRemove} /> 
      })}
    </div>
  );
}

export default TaskList;
