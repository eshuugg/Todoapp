import React from "react";

const ToDolist = (props) => {
  return (
    <>
      <li>
        <div className="todo_style">
          <button
            onClick={() => {
              props.onSelect(props.id);
            }}
            className="delete"
          >
            <i className="fa fa-close" />
          </button>
          <div className="text">{props.text}</div>
        </div>
      </li>
    </>
  );
};

export default ToDolist;
