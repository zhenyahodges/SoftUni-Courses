import { makeRequest } from './makeRequest';

const baseUrl = 'http://localhost:3030/data/cards';

// get all cards
export async function getAllCards() {
    return makeRequest(baseUrl, '', 'GET');
}

// get a specific card
export async function getCard(id) {
    return makeRequest(baseUrl, `/${id}`, 'GET');
}

export async function getUserCards(userId, token) {
    const encodedURI = encodeURI(`${baseUrl}?where=_ownerId LIKE "${userId}"`);
    return makeRequest(encodedURI, '', 'GET', null, {
        'X-Authorization': token,
    });
}

export async function createNewCard(token, brand) {
    return makeRequest(
        baseUrl,
        '',
        'POST',
        { brand },
        {
            'X-Authorization': token,
        }
    );
}

export async function editCard(token, brand, cardId) {
    return makeRequest(
        baseUrl,
        `/${cardId}`,
        'PUT',
        { brand },
        {
            'X-Authorization': token,
        }
    );
}

export async function deleteCard(id, token) {
    return makeRequest(baseUrl, `/${id}`, 'DELETE', null, {
        'X-Authorization': token,
    });
}
