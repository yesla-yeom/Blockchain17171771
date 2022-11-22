import React from "react";

function TodoItem(props) {
  return (
    <div key="1" className="itemBox">
      {props.item}
    </div>
  );
}

export default TodoItem;

// 삭제 버튼 내일 해~~~!!!!! 꼭 해~~!!!!!
