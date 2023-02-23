import { useState } from "react";

const Counter = (props) => {
  const [counter, setCounter] = useState(0);

  const onButtonClick = (e) => {
    setCounter((oldCOunter) => oldCOunter + 1);
  };

  return (
    <div>
      <h3>Counter: {counter}</h3>
      <button onClick={onButtonClick}>+</button>
    </div>
  );
};
export default Counter;
