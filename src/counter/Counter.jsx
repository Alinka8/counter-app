import React, { useState } from "react";

function Counter() {
  const [counter, setCounter] = useState(0);

  const onIncrementHandler = () => {
    setCounter(counter + 1);
  };
  const onDecrementHandler = () => {
    setCounter(counter - 1);
  };
  const onResetHandler = () => {
    setCounter(0);
  };

  return (
    <div>
      <h1>Counter App</h1>
      <h2>{counter}</h2>
      <div>
        <button onClick={onIncrementHandler}>+</button>
        <button onClick={onDecrementHandler}>-</button>
        <button onClick={onResetHandler}>Reset</button>
      </div>
    </div>
  );
}

export default Counter;
