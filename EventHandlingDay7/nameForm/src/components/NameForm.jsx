import { useState } from "react";
import "./NameForm.css"; 

const NameForm = () => {
  const [name, setName] = useState("");
  const [submittedName, setSubmittedName] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault(); // prevent page refresh
    setSubmittedName(name);
  };

  return (
    <div className="form-container">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={name}
          placeholder="Enter your name"
          onChange={(e) => setName(e.target.value)}
          className="name-input"
        />
        <button type="submit" className="submit-btn">Submit</button>
      </form>
      {submittedName && <p className="output-text">Hello, {submittedName}! 👋</p>}
    </div>
  );
};

export default NameForm;
