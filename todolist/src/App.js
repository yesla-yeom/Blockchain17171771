import React, { useState } from "react";
import TodoBoard from "./components/TodoBoard";
import "./App.css";

function App() {
  const [inputValue, setInputValue] = useState("");
  const [todoList, setTodoList] = useState([]);

  const addItem = () => {
    console.log(inputValue);
    setTodoList([...todoList, inputValue]);
  };

  const reset = () => setInputValue("");

  return (
    <>
      <div className="input">
        <input
          type="text"
          className="inputbox"
          value={inputValue}
          onChange={(event) => {
            setInputValue(event.target.value);
          }}
        />
        <button className="input_add" onClick={addItem}>
          추가
        </button>
        <button className="input_reset" onClick={reset}>
          Reset
        </button>
      </div>
      <div>
        <TodoBoard todoList={todoList}></TodoBoard>
      </div>
    </>
  );
}

export default App;
