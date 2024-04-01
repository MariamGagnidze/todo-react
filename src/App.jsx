import React, { useState, useEffect } from "react";
import "./App.css";
import { TaskForm } from "./components/TaskForm";
import { Task } from "./components/Task";
import Footer from "./components/Footer/Footer";

function App() {
  const [tasks, setTasks] = useState([]);
  const [filter, setFilter] = useState("all");

  useEffect(() => {
    const storedTasks = JSON.parse(localStorage.getItem("tasks"));
    if (storedTasks) {
      setTasks(storedTasks);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  const addTask = (name) => {
    setTasks((prevTasks) => [...prevTasks, { name: name, done: false }]);
  };

  const updateTaskDone = (taskIndex, newDone) => {
    setTasks((prevTasks) => {
      const newTasks = [...prevTasks];
      newTasks[taskIndex].done = newDone;
      return newTasks;
    });
  };

  const clearCompleted = () => {
    setTasks((prevTasks) => prevTasks.filter((task) => !task.done));
  };

  const filteredTasks = tasks.filter((task) => {
    if (filter === "active") {
      return !task.done;
    } else if (filter === "complete") {
      return task.done;
    }
    return true;
  });

  return (
    <main>
      <TaskForm onAdd={addTask} />
      {filteredTasks.map((task, index) => (
       <div className="tasks">
         <Task
          key={index}
          name={task.name}
          done={task.done}
          onToggle={(newDone) => updateTaskDone(index, newDone)}
          index={index}
        />
       </div>
      ))}
      <Footer
        tasks={tasks}
        filter={filter}
        setFilter={setFilter}
        clearCompleted={clearCompleted}
      />
    </main>
  );
}

export default App;
