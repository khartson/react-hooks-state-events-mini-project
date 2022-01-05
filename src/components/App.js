import React, { useState } from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";

import { CATEGORIES, TASKS } from "../data";
console.log("Here's the data you're working with");
console.log({ CATEGORIES, TASKS });

function App() {
  const [tasks, setTasks] = useState(TASKS); 

  function handleRemove(text) {
    const newTasks = tasks.filter((task) => task.text !== text);
    setTasks(newTasks); 
  }
 

  const[selected, setSelected] = useState('All');
  function handleFilter(e) {
    setSelected(e.target.value);
  }

  function handleAdd(task) {
    setTasks([...tasks, task]); 
  }

  return (
    <div className="App">
      <h2>My tasks</h2>
      <CategoryFilter categories={CATEGORIES} handleFilter={handleFilter} selected={selected}/>
      <NewTaskForm onTaskFormSubmit={handleAdd} categories={CATEGORIES}/>
      <TaskList selected={selected} tasks={tasks} handleRemove={handleRemove}  />
    </div>
  );
}

export default App;
