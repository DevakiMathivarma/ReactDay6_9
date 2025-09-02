import React, { useState } from "react";
import "./Counter.css"; // Import external CSS

const Counter = () => {
  const [count, setCount] = useState(0);

  return (
    <div className="counter-container">
      <div className="counter-card">
        <h1 className="counter-title">Counter App</h1>
        <p className="counter-value">{count}</p>
        <div className="button-group">
          <button className="btn increase" onClick={() => setCount(count + 1)}>
            ➕ Increase
          </button>
          <button className="btn decrease" onClick={() =>count>0 && setCount(count - 1)}>
            ➖ Decrease
          </button>
          <button className="btn reset" onClick={() => setCount(0)}>
            🔄 Reset
          </button>
        </div>
      </div>
    </div>
  );
};

export default Counter;
