import { requestFactory } from './requester';

const baseUrl = `http://localhost:3030/users`;

// export const login=(data)=>{
//     return request.post(`${baseUrl}/login`,data);
// };

// export const register=(data)=>{
//     return request.post(`${baseUrl}/register`,data);
// };

// export const logout=()=>{
//     // todo add token
//     return request.get(`${baseUrl}/logout`);
// };

export const authServiceFactory = (token) => {
    const request = requestFactory(token);
    return {
        login: (data) => request.post(`${baseUrl}/login`, data),
        register: (data) => request.post(`${baseUrl}/register`, data),
        logout: () =>
            // todo add token
            request.get(`${baseUrl}/logout`),
    };
};
