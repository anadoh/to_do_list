import React from "react";

const TodoItem = (props) => {
  return (
    <div
      className={`card ${props.element.isCompleted ? "completed" : ""}`}
      key={props.element.id}
    >
      <span>{props.element.title}</span>
      <button
        onClick={() => props.markClicked(props.element.id)}
        className={`${props.element.isCompleted ? "button-clicked" : ""}`}
      >
        {props.element.isCompleted ? "Done" : "To do"}
      </button>
    </div>
  );
};

export default TodoItem;
