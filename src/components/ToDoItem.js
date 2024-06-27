import React from "react";

function ToDoItem({ ToDo, toggleStatus, deleteToDo }) {
  return (
    <div className="todo">
      <div className="left">
        <div>
          <input
            checked={ToDo.status}
            onChange={() => toggleStatus(ToDo.id)}
            type="checkbox"
            name=""
            id=""
          />
        </div>
        <div>
          <p
            style={{
              textDecoration: ToDo.status ? "line-through" : "none",
              fontStyle: ToDo.status ? "italic" : "normal",
            }}
          >
            {ToDo.text}
          </p>
          <p
            className="written_date"
            style={{
              fontSize: "65%",
              color: "gray",
              padding: "0",
              marginTop: "4px",
            }}
          >
            {ToDo.createdAt}
          </p>
        </div>
      </div>
      <div className="right">
        <i
          title="Remove Task"
          onClick={() => deleteToDo(ToDo.id)}
          className="fas fa-times"
        ></i>
      </div>
    </div>
  );
}

export default ToDoItem;
