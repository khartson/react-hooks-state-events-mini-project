import React, { useState } from "react";

function NewTaskForm({ onTaskFormSubmit, categories }) {
  const [newTask, setNewTask] = useState({text: '', category: 'Code'})

  function handleChange(e){
    console.log(e.target.value);
    console.log(e.target.name);
    let value = e.target.value;
    let key = (e.target.name); 
    setNewTask({
      ...newTask,
      [key]: value
    })
  }
  return (
    <form className="new-task-form" onSubmit={(e) => {
      e.preventDefault();
      onTaskFormSubmit(newTask);
    }}>
      <label>
        Details
        <input type="text" name="text" value={newTask.text} onChange={handleChange} />
      </label>
      <label>
        Category
        <select name="category" value={newTask.category} onChange={handleChange}>
          {categories.map((category) =>{ 
            if (category !== 'All') return <option name={category} key={category} value={category} >{category}</option>
          })}
        </select>
      </label>
      <input type="submit" value="Add task" />
    </form>
  );
}

export default NewTaskForm;
