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
    <div>
      <input
        type="text"
        value={inputValue}
        onChange={(event) => {
          setInputValue(event.target.value);
        }}
      />
      <button onClick={addItem}>추가</button>
      <button onClick={reset}>Reset</button>

      <TodoBoard todoList={todoList} />
    </div>
  );
}

export default App;
