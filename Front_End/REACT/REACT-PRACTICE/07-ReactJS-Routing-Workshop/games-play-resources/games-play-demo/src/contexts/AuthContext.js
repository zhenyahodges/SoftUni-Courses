import { createContext, useContext, useState } from 'react';
import { authServiceFactory } from '../services/authService';
import { useNavigate } from 'react-router-dom';
import { useLocalStorage } from '../hooks/useLocalStorage';


export const AuthContext=createContext();

export const AuthProvider=({
children,
})=>{

    const navigate = useNavigate();
    // const [auth, setAuth] = useState({});
    const [auth, setAuth] = useLocalStorage('auth',{});
    const authService = authServiceFactory(auth.accessToken);

    const onLoginSubmit = async (data) => {
        try {
            const result = await authService.login(data);
            setAuth(result);
            navigate('/catalog');
        } catch (err) {
            throw new Error(`Error: ${err.message}`);
        }
    };

    const onRegisterSubmit = async (values) => {
        const { confirmPassword, ...registerData } = values;

        if (confirmPassword !== registerData.password) {
            return console.log('Error confirming password');
            // message
        }
        try {
            const result = await authService.register(registerData);

            setAuth(result);

            navigate('/catalog');
        } catch (err) {
            throw new Error(`Error: ${err.message}`);
        }
    };

    const onLogout = async () => {
        // todo add authorization
        await authService.logout();

        // setAuth(null);
        setAuth({});
    };

    const contextData = {
        onLoginSubmit,
        onRegisterSubmit,
        onLogout,
        userId: auth._id,
        token: auth.accessToken,
        email: auth.email,
        isAthenticated: !!auth.accessToken,
    };

    return (
        <>
        <AuthContext.Provider value={contextData}>
        {children}
        </AuthContext.Provider>
        </>
    );
};

export const useAuthContext=()=>{
    const context=useContext(AuthContext);

    return context;
};