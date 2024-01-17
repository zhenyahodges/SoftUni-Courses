import { makeRequest } from './makeRequest';

const baseUrl = 'http://localhost:3030/data/infos';

// || 2ND CATALOG
export async function getAllInfos() {
    return makeRequest(baseUrl, '', 'GET');
}

export async function getInfo(id) {
    return makeRequest(baseUrl, `/${id}`, 'GET');
}

export async function createNewInfo(token, title, web, text) {
    const info = { title, web, text };
    return makeRequest(baseUrl, '', 'POST', info, {
        'X-Authorization': token,
    });
}

export async function editInfo(token, title, web, text, infoId) {
    const info = { title, web, text };
    return makeRequest(baseUrl, `/${infoId}`, 'PUT', info, {
        'X-Authorization': token,
    });
}

export async function getUserInfos(userId, token) {
    const encodedURI = encodeURI(`${baseUrl}?where=_ownerId LIKE "${userId}"`);
    return makeRequest(encodedURI, '', 'GET', null, {
        'X-Authorization': token,
    });
}

export async function deleteInfo(token, infoId) {
    return makeRequest(baseUrl, `/${infoId}`, 'DELETE', null, {
        'X-Authorization': token,
    });
}
