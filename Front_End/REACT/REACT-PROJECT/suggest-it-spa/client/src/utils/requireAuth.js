import { redirect } from 'react-router-dom';

export async function requireAuth() {   
    const user = JSON.parse(localStorage.getItem('user'));

    let isLogged = false;
    let result = {
        isLogged,
    };
    
    if (user) {
        result.isLogged = true;
        result.userId = user.userId;
        result.token = user.token;
    } else {
        result.isLogged = false;
     
        throw redirect('/login?message=You must log in first.');
    }

    return result;
}
