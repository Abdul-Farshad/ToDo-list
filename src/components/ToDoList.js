import React from "react";
import ToDoItem from "./ToDoItem";

function ToDoList({ ToDos, toggleStatus, deleteToDo }) {
  return (
    <div className="todos">
      {ToDos.map((ToDo) => {
        return (
          <ToDoItem
            key={ToDo.id}
            ToDo={ToDo}
            toggleStatus={toggleStatus}
            deleteToDo={deleteToDo}
          />
        );
      })}
    </div>
  );
}

export default ToDoList;
