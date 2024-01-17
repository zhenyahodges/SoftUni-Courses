export async function makeRequest(baseUrl, endpoint, method, body, headers) {
    const res = await fetch(`${baseUrl}${endpoint}`, {
        method,
        body: body ? JSON.stringify(body) : undefined,
        headers: {
            'Content-Type': 'application/json',
            ...headers,
        },
    });

    if (endpoint === '/logout' && res.status === 204) {
        localStorage.clear();
        return {};
    }

    if (
        (baseUrl.includes('http://localhost:3030/data/cards') ||
            baseUrl.includes('http://localhost:3030/data/infos') ||
            baseUrl.includes('suggestions?where')) &&
        res.status === 404
    ) {
        return [];
    }

    if (endpoint === '/login' && !res.ok) {
        throw new Error('Email or password invalid. Please try again.');
    }

    if (!res.ok) {
        throw new Error(`${res.status} - ${res.statusText}`);
    }

    const data = await res.json();
    return data;
}
