import { useState } from 'react';
// import { useState,useId } from 'react';

export const useLocalStorage = (key,initialValue) => {
    // const key=useId();
    const [state, setState] = useState(()=>{

        const persistedStateSerialized=localStorage.getItem(key);

        if(persistedStateSerialized){
            const persistedState=JSON.parse(persistedStateSerialized);

            return persistedState;
        }

        return initialValue;
    });

    const setLocalStorageState = (value) => {
        setState(value);

        // set at local storage

        localStorage.setItem(key, JSON.stringify(value));
    };

    return [state, setLocalStorageState];
};
