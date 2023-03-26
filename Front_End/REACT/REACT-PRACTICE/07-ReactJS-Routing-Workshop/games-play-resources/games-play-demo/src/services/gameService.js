import {requestFactory} from './requester';

const baseUrl = 'http://localhost:3030/data/games';

// // export const getAll = async () => {
// const getAll = async () => {
//     const result = await request.get(baseUrl);
//     const games = Object.values(result);
//     return games;
// };

// // export const create=async(gameData) =>{
// const create = async (gameData) => {
//     const result = await request.post(baseUrl, gameData);

//     return result;
// };

// // export const getOne= async (gameId)=>{
// const getOne = async (gameId) => {
//     const result = await request.get(`${baseUrl}/${gameId}`);
//     return result;
// };

// // export const addComment= async(gameId,data)=>{
// const addComment = async (gameId, data) => {
//     const result = await request.post(`${baseUrl}/${gameId}/comments`, data);
//     return result;
// };

export const gameServiceFactory = (token) => {
    const request = requestFactory(token);

    // export const getAll = async () => {
    const getAll = async () => {
        const result = await request.get(baseUrl);
        const games = Object.values(result);
        return games;
    };

    // export const create=async(gameData) =>{
    const create = async (gameData) => {
        const result = await request.post(baseUrl, gameData);

        return result;
    };

    // export const getOne= async (gameId)=>{
    const getOne = async (gameId) => {
        const result = await request.get(`${baseUrl}/${gameId}`);
        return result;
    };

    // export const addComment= async(gameId,data)=>{
    const addComment = async (gameId, data) => {
        const result = await request.post(
            `${baseUrl}/${gameId}/comments`,
            data
        );
        return result;
    };

    const deleteGame= (gameId)=>{
        request.delete(`${baseUrl}/${gameId}`);
    };

    return {
        getAll,
        getOne,
        create,
        addComment,
        delete: deleteGame
    };
};
