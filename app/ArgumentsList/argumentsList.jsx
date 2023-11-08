"use client";
import React, { useState } from "react";

function ArgumentsLength() {
  const [argumentCount, setArgumentCount] = useState(0);
  const [inputValue, setInputValue] = useState("");
  const [argumentsList, setArgumentsList] = useState([]);

  const handleAddArgument = () => {
    if (inputValue) {
      setArgumentsList([...argumentsList, inputValue]);
      setArgumentCount(argumentsList.length + 1);
      setInputValue("");
    }
  };

  return (
    <div>
      <h1>Argument Length Counter</h1>
      <div>
        <input
          type="text"
          placeholder="Enter an argument"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
        <button onClick={handleAddArgument}>Add Argument</button>
      </div>
      <p>Number of Arguments: {argumentCount}</p>
      <ul>
        {argumentsList.map((argument, index) => (
          <li key={index}>{argument}</li>
        ))}
      </ul>
    </div>
  );
}

export default ArgumentsLength;
