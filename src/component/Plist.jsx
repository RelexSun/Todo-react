import { useState } from "react";
import Task from "./Task";
import { AiOutlineDown } from "react-icons/ai";
import "../Style/Plist.css";
// import { transformWithEsbuild } from "vite";
export default function Plist({ task, onDeleteTask, onToggle, onSaveEdit }) {
  const completedItems = task.filter((item) => item.complete);
  const allComItems = [...completedItems];
  const incompleteItems = task.filter((item) => !item.complete);
  const allIncomItems = [...incompleteItems];

  const [show, setShow] = useState(false);
  console.log(show);
  return (
    <div className="ul-container">
      <p>tasks</p>
      <div className="line-break"></div>
      <ul>
        {allIncomItems.map((item) => (
          <Task
            task={item}
            key={item.id}
            onDeleteTask={onDeleteTask}
            onToggle={onToggle}
            onSaveEdit={onSaveEdit}
          />
        ))}
      </ul>
      <div className="toggle" onClick={() => setShow(!show)}>
        <div className="toggle-switch">
          <AiOutlineDown className={!show ? "show" : "hide"} />
        </div>
        <p>completed</p>
      </div>
      <div className="line-break"></div>
      <ul className={show ? " hidden " : "shown"}>
        {allComItems.map((item) => (
          <Task
            task={item}
            key={item.id}
            onDeleteTask={onDeleteTask}
            onToggle={onToggle}
            onSaveEdit={onSaveEdit}
          />
        ))}
      </ul>
    </div>
  );
}
