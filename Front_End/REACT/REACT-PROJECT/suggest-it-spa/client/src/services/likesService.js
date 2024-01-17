import { makeRequest } from './makeRequest';

const baseUrl = 'http://localhost:3030/data/likes';

export async function postLike(suggestionId, token, userId) {
    const info = { suggestionId, userId };
    return await makeRequest(baseUrl, '', 'POST', info, {
        'X-Authorization': token,
    });
}

export async function getOneLike(suggId, userId) {
    const searchQuery = encodeURIComponent(`suggestionId="${suggId}"`);
    const url = `${baseUrl}?where=${searchQuery}`;
    const data = await makeRequest(url, '', 'GET', null);

    if (data) {
        const likeId = data.find((item) => item.userId === userId)?._id;
        return likeId;
    }
    return null;
}

export async function deleteLike(likeId, token) {
    return await makeRequest(baseUrl, `/${likeId}`, 'DELETE', null, {
        'X-Authorization': token,
    });
}

export async function getSuggestionLikesCount(suggestionId) {
    const searchQuery = encodeURIComponent(`suggestionId="${suggestionId}"`);
    const url = `${baseUrl}?where=${searchQuery}&count`;
    return await makeRequest(url, '', 'GET', null);
}
