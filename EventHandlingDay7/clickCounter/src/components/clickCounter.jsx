import { useState } from "react";
import "./ClickCounter.css"

const ClickCounter = () => {
  const [count, setCount] = useState(0);

  return (
    <div className="counter-container">
      <h1 className="counter-title">Click Counter</h1>
      <p className="counter-value">{count}</p>
      <button className="counter-btn" onClick={() => setCount(count + 1)}>
        Click Me
      </button>
    </div>
  );
};

export default ClickCounter;
