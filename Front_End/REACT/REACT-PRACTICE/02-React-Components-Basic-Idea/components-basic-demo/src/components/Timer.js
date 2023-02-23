// import React, { useState } from "react";
import { useState } from "react";

const Timer = (props) => {
//   const [seconds, setSeconds] = React.useState(props.start);
  const [seconds, setSeconds] = useState(props.start);

//   console.log("seconds-" + seconds);

//  NB!!! NOT GOOD PRACTICE- useEffect is better
  setTimeout(() => {
    // setSeconds(seconds + 1)

    // updater func
    setSeconds((state) => state+1);
  }, 1000);

  return (<div>
    <h2>Timer</h2>
    Time:{seconds}s</div>);
};
export default Timer;
