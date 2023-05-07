const requester = async (method, token, url, data) => {
    const options = {};

    if (method !== 'GET') {
        options.method = method;

        if (data) {
            options.headers = {
                'Content-Type': 'application/json',
            };
            options.body = JSON.stringify(data);
        }
    }

    if (token) {       
        options.headers = {
            ...options.headers,
            'X-Authorization': token,
        };
    }

    const res = await fetch(url, options);

    // can change to:
    // ==============
    if (res.status === 204) {
        return {};
    }
    if (!res.ok) {
       
        throw new Error(res.status);
        // throw result;
    }
    const result = await res.json();

    return result;
    // ==============

    // try {
    //     const result = await res.json();

    //     // check error: 403
    //     return result;
    // } catch {
    //     // check error
    //     // check return -empty object when no content
    //     return {};
    // }
};

// export const get = request.bind(null, 'GET');
// export const post = request.bind(null, 'POST');
// export const put = request.bind(null, 'PUT');
// export const del = request.bind(null, 'DELETE');
// export const patch = request.bind(null, 'PATCH');

export const requestFactory = (token) => {

if(!token){
    const serializedAuth=localStorage.getItem('auth');
    
    if(serializedAuth){
        const auth=JSON.parse(serializedAuth);
        token=auth.accessToken;
    }
}

    return {
        // get: request.bind(null, 'GET', token),
        // post: request.bind(null, 'POST', token),
        // put: request.bind(null, 'PUT', token),
        // delete: request.bind(null, 'DELETE', token),
        // patch: request.bind(null, 'PATCH', token),
  
        get: requester.bind(null, 'GET', token),
        post: requester.bind(null, 'POST', token),
        put: requester.bind(null, 'PUT', token),
        delete: requester.bind(null, 'DELETE', token),
        patch: requester.bind(null, 'PATCH', token),
    };
};

// export const request=requestFactory(localStorage.getItem('auth'))
