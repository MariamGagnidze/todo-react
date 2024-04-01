import React from "react";
import { Checkbox } from "./Checkbox";

export const Task = ({ name, done, onToggle, index }) => {
  return (
    <div className="task">
      <Checkbox checked={done} onClick={() => onToggle(index, !done)} />
      <span className={done ? "done" : ""}>{name}</span>
    </div>
  );
};
