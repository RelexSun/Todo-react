import { useState } from "react";
import { AiOutlinePlus } from "react-icons/ai";
import '../Style/Form.css'

export default function Form({ onAddTodo }) {
  const [title, setTitle] = useState("");
  function handleSubmit(e) {
    e.preventDefault();

    if (!title) return;
    setTitle("");
    const newTodo = { id: Date.now(), title: title, completed: false };
    onAddTodo(newTodo);
  }

  return (
    <form action="" onSubmit={handleSubmit}>
      <div className="form">
        <input
          type="text"
          placeholder="Todo list"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="input-form"
        />
        <button className="plus-button">
          <AiOutlinePlus className="button-form" />
        </button>
      </div>
    </form>
  );
}
