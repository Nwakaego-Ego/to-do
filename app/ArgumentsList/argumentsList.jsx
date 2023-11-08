"use client";
import React, { useState } from "react";

function ArgumentsLength() {
  const [argumentCount, setArgumentCount] = useState(0);
  const [inputValue, setInputValue] = useState("");
  const [argumentsList, setArgumentsList] = useState([]);
  const [selected, setSelected] = useState(-1);

  const handleAddArgument = () => {
    if (inputValue) {
      setArgumentsList([...argumentsList, inputValue]);
      setArgumentCount(argumentCount + 1); // Increment the count directly.
      setInputValue("");
    }
  };

  function handleDelete(index) {
    const newList = argumentsList.filter((_, i) => i !== index);
    setArgumentsList(newList);
  }

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

        <button
          onClick={handleAddArgument}
          className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded shadow-md"
        >
          Add Argument
        </button>
      </div>
      <p>Number of Arguments: {argumentCount}</p>
      <ul>
        {argumentsList.map((argument, index) => (
          <li key={index}>
            {argument}{" "}
            <button
              onClick={() => handleDelete(index)} // Pass the index to the delete function.
              className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded shadow-md"
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ArgumentsLength;
