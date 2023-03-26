// import * as request from './requester';

import { requestFactory } from './requester';

const baseUrl = 'http://localhost:3030/data/comments';

// get req from reqFac
const request = requestFactory();

export const getAll = async (gameId) => {
    //  quotessssssss!!!!!!!!!!!!!!!!!!!!!!!
    const searchQuery = encodeURIComponent(`gameId="${gameId}"`);
    const relationQuery= encodeURIComponent(`author=_ownerId:users`);

    const result = await request.get(`${baseUrl}?where=${searchQuery}&load=${relationQuery}`);
    const comments = Object.values(result);
    return comments;
};

export const create = async (gameId, comment) => {
    const result = await request.post(baseUrl, { gameId, comment });
    return result;
};

