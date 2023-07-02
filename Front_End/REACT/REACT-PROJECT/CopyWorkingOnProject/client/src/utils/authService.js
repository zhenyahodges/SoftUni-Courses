const baseUrl = 
'http://localhost:3030/users';

export async function loginUser(creds) {
    const res = await fetch(`${baseUrl}/login`, {
        method: 'post',
        body: JSON.stringify(creds),
    });

    if (!res.ok) {
        throw new Error('Email or password invalid. Please try again.');
    }
    const data = await res.json();
    return data;
}

export async function registerUser(creds) {
    const res = await fetch(`${baseUrl}/register`, {
        method: 'post',
        body: JSON.stringify(creds),
    });

    if (!res.ok) {
        throw new Error(`${res.status} - ${res.statusText}`);
    }
    const data = await res.json();
    return data;
}

export async function logoutUser(token) {
    const res = await fetch(`${baseUrl}/logout`, {
        method: 'get',
        headers: {
            'Content-Type': 'application/json',
            'X-Authorization': token,
        },
    });

    if (!res.ok) {
        throw new Error(`${res.status} - ${res.statusText}`);
    }
    if (res.status === 204) {
        localStorage.clear();
        return {};
    }
    return res;
}

export async function getUserInfo(token) {
    const res = await fetch(`${baseUrl}/me`, {
        method: 'get',
        headers: {
            'Content-Type': 'application/json',
            'X-Authorization': token,
        },
    });

     if (res.status === 404) {
        return [];
    } else if (!res.ok) {
        throw new Error(`${res.status} - ${res.statusText}`);
    }

    const data = await res.json();

    return data;
}