// import React from 'react';
import {useState} from 'react';

const Timer=(props)=>{
    // const [seconds,setSeconds]= React.useState(props.start);
    const [seconds,setSeconds]= useState(props.start);
   
    setTimeout(()=>{
        // NOT GOOD practice, useEffect is better!!!
        setSeconds((state)=>state+1);
    },1000);

    return(
        <div>Time: {seconds}s</div>
    );
};

export default Timer;