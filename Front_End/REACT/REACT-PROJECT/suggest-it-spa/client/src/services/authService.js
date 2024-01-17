import { makeRequest } from './makeRequest';

const baseUrl = 'http://localhost:3030/users';

export async function loginUser(creds) {
    return makeRequest(baseUrl, '/login', 'post', creds);
}
export async function registerUser(creds) {
    return makeRequest(baseUrl, '/register', 'post', creds);
}

export async function logoutUser(token) {
    return makeRequest(baseUrl, '/logout', 'get', null, {
        'X-Authorization': token,
    });
}

export async function getUserInfo(token) {
    return makeRequest(baseUrl, '/me', 'get', null, {
        'X-Authorization': token,
    });
}
