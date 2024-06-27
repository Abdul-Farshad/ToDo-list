import React from "react";

const ToDoInput = ({ ToDo, setToDo, addTodo }) => {
  return (
    <div className="input">
      <input
        value={ToDo}
        onChange={(e) => setToDo(e.target.value)}
        type="text"
        placeholder="🖊️ Add New Task..."
      />
      <i title="Add Task" onClick={addTodo} className="fas fa-plus"></i>
    </div>
  );
};

export default ToDoInput;
