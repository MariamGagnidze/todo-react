import React from "react";
import Counter from "./Counter";

const Footer = ({ tasks, filter, setFilter, clearCompleted }) => {
  const count = tasks.filter((task) => !task.done).length;

  const handleFilterChange = (newFilter) => {
    setFilter(newFilter);
  };

  return (
    <footer>
      <Counter count={count} />
      <button onClick={() => handleFilterChange("all")}>All</button>
      <button onClick={() => handleFilterChange("active")}>Active</button>
      <button onClick={() => handleFilterChange("complete")}>Complete</button>
      <button onClick={clearCompleted}>Clear Completed</button>
    </footer>
  );
};

export default Footer;
