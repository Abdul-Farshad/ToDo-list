import "./App.css";
import ToDoInput from "./components/ToDoInput";
import ToDoList from "./components/ToDoList";
import { useState } from "react";

function App() {
  const [ToDos, setToDos] = useState([]);
  const [ToDo, setToDo] = useState("");

  // Add new Task
  const addTodo = () => {
    const currDate = new Date();
    const formattedTime = currDate.toLocaleTimeString([],  { hour: '2-digit', minute: '2-digit' })
    if (ToDo.trim() === "") return;
    setToDos([
      ...ToDos,
      {
        id: Date.now(),
        text: ToDo,
        status: false,
        createdAt: `${currDate.toLocaleDateString()} ${formattedTime}`,
      },
    ]);
    setToDo("");
  };

  // Delete a task
  const deleteToDo = (id) => {
    setToDos(ToDos.filter((ToDo) => ToDo.id !== id));
  };

  // Toggle the task completion check box
  const toggleStatus = (id) => {
    setToDos(
      ToDos.map((ToDo) => {
        if (ToDo.id === id) {
          ToDo.status = !ToDo.status;
        }
        return ToDo;
      })
    );
  };
  // Sort the ToDo list based of the task completion
  // [ New Task --> completed task ]
  const sortedToDos = ToDos.sort((a, b) => a.status - b.status);

  return (
    <div className="app">
      <div className="mainHeading">
        <h1>ToDo List</h1>
      </div>
      <div className="subHeading">
        <br />
        <p>Remember to prioritize your tasks for today!</p>
        <br/>
        <p style={{ fontSize: "80%" }}>{new Date().toDateString()}</p>
      </div>
      <ToDoInput ToDo={ToDo} setToDo={setToDo} addTodo={addTodo} />
      <ToDoList
        ToDos={sortedToDos}
        toggleStatus={toggleStatus}
        deleteToDo={deleteToDo}
      />
    </div>
  );
}

export default App;
