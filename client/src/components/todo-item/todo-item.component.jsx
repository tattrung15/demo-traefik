import React from "react";
import "./todo-item.css";
import clsx from "clsx";

class TodoItem extends React.Component {
  render() {
    const { item, onClickItem } = this.props;

    return (
      <>
        <p
          onClick={() => onClickItem(item)}
          className={clsx({ isDone: item.isDone })}
        >
          {item.title}
        </p>
      </>
    );
  }
}

export default TodoItem;
