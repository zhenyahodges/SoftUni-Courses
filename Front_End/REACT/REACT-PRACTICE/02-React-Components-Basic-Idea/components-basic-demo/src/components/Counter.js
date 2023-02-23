import { useState } from "react";

const Counter = (props) => {
  const [counter, setCounter] = useState(0);

  const incremCounter = (e) => {
    setCounter((oldCOunter) => oldCOunter + 1);
  };

  const decremCounter = (e) => {
    setCounter((oldCOunter) => oldCOunter - 1);
  };

  const clearCounter = (e) => {
    setCounter(0);
  };

  return (
    <div>
      <h3>Counter: {counter}</h3>
      <button onClick={decremCounter}>-</button>
      <button onClick={clearCounter}>Clear</button>
      <button onClick={incremCounter}>+</button>
    </div>
  );
};
export default Counter;
