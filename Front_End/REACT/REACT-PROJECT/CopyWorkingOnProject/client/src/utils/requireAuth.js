import { redirect } from 'react-router-dom';

export async function requireAuth() {
    let isLogged = false;
    let result = {
        isLogged,
    };

    const user = JSON.parse(localStorage.getItem('user'));

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

export function loggedAuth() {
    let isLogged = false;
    let result = {
        isLogged,
    };

    const user = JSON.parse(localStorage.getItem('user'));

    if (user) {
        result.isLogged = true;
        // throw redirect('/');
        throw redirect('/?message=You have no access to this feature currently.');
        // throw redirect('/');
    } else{
      return  result.isLogged = false;
    }
}
