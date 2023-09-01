import { useState, useEffect } from "react";
import "../index.css";
import "../Style/App.css";
import Form from "./Form";
import Plist from "./Plist";
import '../Style/App.css'

function App() {
  const [task, setTask] = useState([]);

  useEffect(() => {
    const storedItems = JSON.parse(
      localStorage.getItem("task") || JSON.stringify([])
    );
    setTask(storedItems);
  }, []);

  useEffect(() => {
    localStorage.setItem("task", JSON.stringify(task));
  }, [task]);

  function handleAddTask(item) {
    setTask((items) => [item, ...items]);
  }
  function handleDeleteTask(id) {
    setTask((items) => items.filter((item) => item.id !== id));
  }

  function handleToggle(id) {
    setTask((items) =>
      items.map((item) =>
        item.id === id ? { ...item, complete: !item.complete } : item
      )
    );
  }

  function handleSaveEdit(id, newTitle) {
    setTask((item) =>
      item.map((it) => (it.id === id ? { ...it, title: newTitle } : it))
    );
  }

  return (
    <div className="app">
      <h1>📌 Sun Todo </h1>
      <div className="container">
      <Form onAddTodo={handleAddTask} />
      <Plist
        task={task}
        onDeleteTask={handleDeleteTask}
        onToggle={handleToggle}
        onSaveEdit={handleSaveEdit}
      />
      </div>
    </div>
  );
}

export default App;
