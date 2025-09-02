import React from "react";

const FruitList = () => {
  const fruits = ["Apple", "Banana", "Orange", "Mango", "Grapes"];

  return (
    <>
      <h1>🍎 Fruit List</h1>
      <ul>
        {fruits.map((fruit, index) => (
          <React.Fragment key={index}>
            <li>{fruit}</li>
          </React.Fragment>
        ))}
      </ul>
    </>
  );
};

export default FruitList;
