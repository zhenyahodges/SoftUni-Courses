import React from 'react';

const Timer = (props) => {
    const [seconds,setSeconds]=React.useState(props.start);

    console.log('seconds-' + seconds);

    setTimeout(() =>{
        // setSeconds(seconds + 1)
        // updater func
        setSeconds((state)=>state++);
;    },1000);

  return <div>Time:{seconds}s</div>;
};
export default Timer;
