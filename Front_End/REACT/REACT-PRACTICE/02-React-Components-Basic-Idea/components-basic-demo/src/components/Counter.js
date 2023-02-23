import { useState } from "react";

const getTitle = (count) => {
  switch (count) {
    case 1:
      return "First";
    case 2:
      return "Second";
    case 3:
      return "Third";
    default:
      return "Counter";
  }
};

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

  //   const title = getTitle(counter);

  // let title='Counter';
  // if(counter==1){
  //     title='First';
  // }else if(counter==2){
  //     title='Second';
  // }

  return (
    <div>
      {/* <h3>Counter: {counter}</h3> */}
      <h3>
       <p style={{fontSize: (Math.max(counter,1))/2 + 'rem'}}>
        {counter > 2 ? "Many" : getTitle(counter)}: {counter}
        </p>
      </h3>
     
      <button onClick={decremCounter}>-</button>
      
      {props.canReset && <button onClick={clearCounter}>Clear</button>}
      
      {counter < 10 ? <button onClick={incremCounter}>+</button> : null}
  
    </div>
  );
};
export default Counter;
