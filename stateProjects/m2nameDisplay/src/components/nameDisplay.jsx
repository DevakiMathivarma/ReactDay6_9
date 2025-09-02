import { useState } from "react";
import "./nameDisplay.css"; // external CSS

const NameDisplay = () => {
  const [name, setName] = useState("");

  return (
    <div className="name-container">
      <h1 className="title">Mini Project 2: Name Display</h1>
      <input
        type="text"
        value={name}
        placeholder="Type your name..."
        onChange={(e) => setName(e.target.value)}
        className="name-input"
      />
      <p className="name-output">
        {name ? `Hello, ${name}! 👋` : "Start typing above..."}
      </p>
    </div>
  );
};

export default NameDisplay;
