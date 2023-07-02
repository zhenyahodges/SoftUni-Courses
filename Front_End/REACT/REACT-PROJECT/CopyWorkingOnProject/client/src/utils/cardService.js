const baseUrl = 
'http://localhost:3030/data/cards';
// process.env.NODE_ENV === 'development'
// ? 'http://localhost:3030'
// : 'https://localhost:3031';

export async function getCards(id) {
    const url = id ? `${baseUrl}/${id}` : `${baseUrl}`;
    const res = await fetch(url);

    if (res.status === 404) {
        return null;
    } else if (!res.ok) {
        throw new Error(`${res.status} - ${res.statusText}`);
    } 
    const data = await res.json();
    return data;
}

export async function getUserCards(userId, token) {
    const uri = `${baseUrl}?where=_ownerId LIKE "${userId}"`;
    const encoded = encodeURI(uri);
    const res = await fetch(encoded, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'X-Authorization': token,
        },
    });
    if (res.status === 404) {
        return null;
    } else if (!res.ok) {
        throw new Error(`${res.status} - ${res.statusText}`);
    }
    const data = await res.json();
    return data;
}

export async function createNewCard(token, brand) {
    const creds = { brand };
    const res = await fetch(`${baseUrl}`, {
        method: 'post',
        headers: {
            'Content-Type': 'application/json',
            'X-Authorization': token,
        },
        body: JSON.stringify(creds),
    });
    if (!res.ok) {
        throw new Error(`${res.status} - ${res.statusText}`);
    }
 
    const data = await res.json();
    return data;
}

export async function editCard(token, brand, cardId) {
    const info = { brand };

    const res = await fetch(`${baseUrl}/${cardId}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
            'X-Authorization': token,
        },
        body: JSON.stringify(info),
    });
    if (!res.ok) {
        throw new Error(`${res.status} - ${res.statusText}`);
    }
    
    const data = await res.json();
    return data;
}

export async function onDeleteCard(id, token) {
    const res = await fetch(`${baseUrl}/${id}`, {
        method: 'delete',
        headers: {
            'Content-Type': 'application/json',
            'X-Authorization': token,
        },
    });

    if (!res.ok) {
        throw new Error(`${res.status} - ${res.statusText}`);
    }
  
    const data = await res.json();
    return data;
}









