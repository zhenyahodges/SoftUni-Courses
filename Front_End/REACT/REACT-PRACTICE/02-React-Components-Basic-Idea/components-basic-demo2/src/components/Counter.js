import { useState } from 'react';

const Counter = (props) => {
  const [counter, setCounter] = useState(0);

  const incremCounter = () => {
    setCounter((oldCounter) => oldCounter + 1);
  };

  const decremCounter = () => {
    setCounter((oldCounter) => oldCounter - 1);
  };

  const resetCounter = () => {
    setCounter(0);
  };

  let title = 'Counter';
  if (counter === 1) {
    title = 'First';
  } else if (counter === 2) {
    title = 'Second';
  }

  return (
    <div>
      <h3>{counter>3 ? 'Winner': title} : {counter}
      </h3>
      {/* <button onClick={incremCounter}>+</button> */}
      {counter<10
      ?  <button onClick={incremCounter}>+</button>
    : null}

      {props.canReset && <button onClick={resetCounter}>reset</button>}

      <button onClick={decremCounter}>-</button>
    </div>
  );
};

export default Counter;
