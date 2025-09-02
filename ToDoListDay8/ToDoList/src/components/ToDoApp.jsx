import { useState } from "react";
import "./TodoApp.css"; // external CSS

const TodoApp = () => {
  const [tasks, setTasks] = useState([]);
  const [input, setInput] = useState("");

  // Add a task
  const addTask = () => {
    if (input.trim() === "") return; // prevent empty tasks
    setTasks([...tasks, input]);
    setInput("");
  };

  // Delete a task
  const deleteTask = (index) => {
    setTasks(tasks.filter((_, i) => i !== index));
  };

  return (
    <div className="todo-container">
      <h1 className="todo-title">To-Do List App ✅</h1>

      <div className="input-group">
        <input
          type="text"
          value={input}
          placeholder="Enter a task..."
          onChange={(e) => setInput(e.target.value)}
          className="todo-input"
        />
        <button onClick={addTask} className="add-btn">Add</button>
      </div>

      <ul className="task-list">
        {tasks.map((task, index) => (
          <li key={index} className="task-item">
            <span>{task}</span>
            <button onClick={() => deleteTask(index)} className="delete-btn">
              ❌
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoApp;
