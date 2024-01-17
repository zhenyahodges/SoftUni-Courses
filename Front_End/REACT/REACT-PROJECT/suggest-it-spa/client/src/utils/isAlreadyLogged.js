import { redirect } from 'react-router-dom';

export async function isAlreadyLogged() {
    const user = JSON.parse(localStorage.getItem('user'));

    if (user) {
        throw redirect(`/users/${user.userId}?message=You are logged in.`);
    }else{
        return null ;
    }
}
