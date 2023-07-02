import { createContext, useContext, useEffect, useState } from 'react';

export const LoggedContext = createContext();

export function useLogged() {
    return useContext(LoggedContext);
}

export const LoggedProvider = ({ children }) => {
    const [isLogged, setIsLogged] = useState(false);

    useEffect(() => {
        const userData = JSON.parse(localStorage.getItem('user'));
        if (userData) {
            userData.userId ? setIsLogged(true) : setIsLogged(false);
        } else {
            setIsLogged(false);
        }
    }, [setIsLogged]);

    const contextValues = {
        isLogged,
        setIsLogged,
    };

    return (
        <>
            <LoggedContext.Provider value={contextValues}>
                {children}
            </LoggedContext.Provider>
        </>
    );
};
