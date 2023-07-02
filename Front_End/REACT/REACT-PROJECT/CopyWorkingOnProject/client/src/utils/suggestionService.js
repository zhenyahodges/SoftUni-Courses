const baseUrl = 
'http://localhost:3030';

export async function getUserSuggestions(userId, token) {
    const uri = `${baseUrl}/data/suggestions?where=_ownerId LIKE "${userId}"`;
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

export async function onDeleteSuggestion(id, token) {
    const res = await fetch(`${baseUrl}/data/suggestions/${id}`, {
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


export async function getOneSuggestions(suggestionId, token) {
    const searchQuery = encodeURIComponent(`_id="${suggestionId}"`);
    const relationQuery = encodeURIComponent('author=_ownerId:users');

    const url = `${baseUrl}/data/suggestions?where=${searchQuery}&load=${relationQuery}`;
    const res = await fetch(url, {
        method: 'GET',
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


export async function onEditSuggestion(
    token,
    cardId,
    suggestion,
    suggestionId
) {
    const info = { suggestion, cardId };

    const res = await fetch(`${baseUrl}/data/suggestions/${suggestionId}`, {
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


export async function getCardSuggestions(cardId) {
    const searchQuery = encodeURIComponent(`cardId="${cardId}"`);
    const relationQuery = encodeURIComponent('author=_ownerId:users');

    const url = `${baseUrl}/data/suggestions?where=${searchQuery}&load=${relationQuery}`;
    const res = await fetch(url, {
        method: 'GET',
    });
    if (res.status === 404) {
        return null;
    } else if (!res.ok) {
        throw new Error(`${res.status} - ${res.statusText}`);
    }
   
    const data = await res.json();
    return data;
}

export async function addSuggestion(token, cardId, suggestion) {
    const info = { suggestion, cardId };

    const res = await fetch(`${baseUrl}/data/suggestions`, {
        method: 'post',
        headers: {
            'Content-Type': 'application/json',
            'X-Authorization': token,
        },
        body: JSON.stringify(info),
    });
    if (!res.ok) {
        throw new Error(`${res.status} - ${res.statusText}`);
    }
    if (res.status === 204) {
        return null;
    }
    const data = await res.json();
    return data;
}



