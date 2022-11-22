import React from "react";
import TodoItem from "./TodoItem";

function TodoBoard(props) {
  return (
    <div>
      <h2>To do List</h2>
      {props.todoList.map((item) => (
        <TodoItem item={item} />
      ))}
    </div>
  );
}

export default TodoBoard;
