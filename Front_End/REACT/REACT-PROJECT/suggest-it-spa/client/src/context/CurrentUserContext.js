import { createContext, useEffect, useState } from 'react';

export const CurrentUserContext = createContext();

export const CurrentUserProvider = ({ children }) => {
    const [currentUser, setCurrentUser] = useState('Guest');
    const userData = JSON.parse(localStorage.getItem('user'));
    const[currentUserId,setCurrentUserId] = useState('');
    const[currentToken,setCurrentToken] = useState('');

    useEffect(() => {
        if (userData) {
            setCurrentUser(userData.email);
            setCurrentUserId(userData.userId);
            setCurrentToken(userData.token);
        } else {
            setCurrentUser('Guest');
            setCurrentToken('');

        }
    }, [setCurrentUser, userData]);

    const contextValues = {
        currentUser,
        currentUserId,
        currentToken,
        setCurrentUser,
        setCurrentToken,
        setCurrentUserId
    };

    return (
        <>
            <CurrentUserContext.Provider value={contextValues}>
                {children}
            </CurrentUserContext.Provider>
        </>
    );
};
