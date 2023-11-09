"use client";

import React, { useState } from "react";
import { FaPaste, FaTrash } from "react-icons/fa";
import "./argumentsList.css";

function ArgumentsLength() {
  const [argumentCount, setArgumentCount] = useState(0);
  const [inputValue, setInputValue] = useState("");
  const [argumentsList, setArgumentsList] = useState([]);

  const handleAddArgument = () => {
    if (inputValue) {
      setArgumentsList([...argumentsList, inputValue]);
      setArgumentCount(argumentCount + 1);
      setInputValue("");
    }
  };

  function handleDelete(index) {
    const newList = argumentsList.filter((_, list) => list !== index);
    setArgumentsList(newList);
  }

  function handleUpdate(index, newValue) {
    const updatedList = [...argumentsList];
    updatedList[index] = newValue;
    setArgumentsList(updatedList);
  }

  return (
    <div className="container">
      <h1 className="text-gray-500 font-bold p-4 justify-center ">
        Argument Length Counter
      </h1>
      <div>
        <input
          type="text"
          placeholder="Enter a note...."
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          className="text-input"
        />

        <button onClick={handleAddArgument} className="btn">
          Note
        </button>
      </div>
      <p className="text-gray-500 font-bold p-4">
        Number of Notes: {argumentCount}
      </p>
      <div className="notes">
        <ul>
          {argumentsList.map((argument, index) => (
            <li key={index}>
              <span className="note">{argument}</span>
              <button onClick={() => handleDelete(index)}>
                <FaTrash className="trash" />
              </button>
              <button
                onClick={() => {
                  const newValue = prompt("Enter a new value for the argument");
                  if (newValue !== null) {
                    handleUpdate(index, newValue);
                  }
                }}
              >
                <FaPaste className="paste" />
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default ArgumentsLength;
