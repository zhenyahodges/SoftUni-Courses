const baseUrl = 
'http://localhost:3030/data/infos';

// || 2ND CATALOG
export async function getInfos(id) {
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

export async function createNewInfo(token, title, web, text) {
    const creds = { title, web, text };
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

export async function editInfo(token, title, web, text, infoId) {
    const info = { title, web, text };
    const res = await fetch(`${baseUrl}/${infoId}`, {
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

export async function getUserInfos(userId, token) {
    const uri = `${baseUrl}?where=_ownerId LIKE "${userId}"`;
    const encoded = encodeURI(uri);
    const res = await fetch(encoded, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'X-Authorization': token,
        },
    });
    if(res.status===404){
        return null;
    }else 
    if (!res.ok) {
        throw new Error(`${res.status} - ${res.statusText}`);
    }
  
    const data = await res.json();
    return data;
}

export async function onDeleteInfo(infoId, token) {
    const res = await fetch(`${baseUrl}/${infoId}`, {
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