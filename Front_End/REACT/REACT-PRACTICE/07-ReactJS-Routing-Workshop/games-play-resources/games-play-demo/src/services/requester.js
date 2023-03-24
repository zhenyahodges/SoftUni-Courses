const request = async (method, url, data) => {
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

    const res = await fetch(url, options);

    // can change to:
    // ==============
    if(res.status===204){
        return {};
    }
    const result=await res.json();

    if(!result.ok){
        throw result;
    }

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

export const get = request.bind(null, 'GET');
export const post = request.bind(null, 'POST');
export const put = request.bind(null, 'PUT');
export const del = request.bind(null, 'DELETE');
export const patch = request.bind(null, 'PATCH');
