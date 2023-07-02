import { createContext, useContext, useEffect, useState } from 'react';

export const CurrentUserContext = createContext();

export function useWhoIsLooking() {
    return useContext(CurrentUserContext);
}

export const CurrentUserProvider = ({ children }) => {
    const [whoIsLooking, setWhoIsLooking] = useState('Guest');

    const userData = JSON.parse(localStorage.getItem('user'));

    useEffect(() => {
        if (userData) {
            // let email = userData.email;
            // email ? setWhoIsLooking(email) : setWhoIsLooking('Guest');
            setWhoIsLooking(userData.email);
        } else {
            setWhoIsLooking('Guest');
        }
    }, [setWhoIsLooking, userData]);

    const contextValues = {
        whoIsLooking,
        setWhoIsLooking,
    };

    return (
        <>
            <CurrentUserContext.Provider value={contextValues}>
                {children}
            </CurrentUserContext.Provider>
        </>
    );
};
