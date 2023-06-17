import React, { useState } from "react";

function Todo() {
  const [currentTodo, setCurrentTodo] = useState("");
  const [todoList, setTodoList] = useState([]);

  const onInputHandler = (e) => {
    setCurrentTodo(e.target.value);
  };
  const onAddHandler = () => {
    setTodoList([currentTodo, ...todoList]);
    setCurrentTodo("");
  };

  return (
    <div className="todo-container">
      <div className="todo-container__input-box">
        <input
          value={currentTodo}
          placeholder="enter todo"
          onChange={onInputHandler}
        ></input>
        <button onClick={onAddHandler}>ADD</button>
        <div className="todo-container__lists">
          {todoList.map((el, index) => {
            return <p key={index}>{el}</p>;
          })}
        </div>
      </div>
    </div>
  );
}

export default Todo;
