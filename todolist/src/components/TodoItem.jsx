import React, { useState } from "react";

function TodoItem(props) {
  const [todoList, setTodoList] = useState([]);

  const onClickDeleteBtn = () => {
    if (window.confirm("정말로 지우실건가요?")) {
      const nextTodoList = todoList.map((item) => ({
        ...item,
        deleted: item === todoList ? true : item.deleted,
      }));

      setTodoList(nextTodoList);
    }
  };

  // 모르겠다~~~~ 모르겠어~~~

  return (
    <div key="1" className="itemBox">
      {props.item}

      <div className="delete">
        <button type="button" className="delete-btn" onClick={onClickDeleteBtn}>
          삭제
        </button>
      </div>
    </div>
  );
}

export default TodoItem;
