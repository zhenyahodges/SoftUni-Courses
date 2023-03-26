// import * as request from './requester';

import { requestFactory } from './requester';

const baseUrl = 'http://localhost:3030/data/comments';

// get req from reqFac
const request = requestFactory();

export const getAll = async (gameId) => {
    //  quotessssssss!!!!!!!!!!!!!!!!!!!!!!!
    const query = encodeURIComponent(`gameId="${gameId}"`);
    const result = await request.get(`${baseUrl}?where=${query}`);
    const comments = Object.values(result);
    return comments;
};

export const create = async (gameId, comment) => {
    const result = await request.post(baseUrl, { gameId, comment });
    return result;
};

