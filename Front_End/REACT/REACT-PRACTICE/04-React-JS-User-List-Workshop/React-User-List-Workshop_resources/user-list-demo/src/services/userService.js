const baseUrl = 'http://localhost:3005/api/users';

export const getAll = async () => {
    const res = await fetch(baseUrl);
    const result = await res.json();

    return result.users;
};

export const getOne = async (userId) => {
    const res = await fetch(`${baseUrl}/${userId}`);
    const result = await res.json();

    return result.user;
};

export const create = async (userData) => {
    const { streetNumber, street, city, country, ...data } = userData;
    data.address = {
        streetNumber,
        street,
        city,
        country,
    };

    const res = await fetch(baseUrl, {
        method: 'POST',
        headers: {
            'content-type': 'application/json',
        },
        body: JSON.stringify(data),
    });

    const result = await res.json();
    return result.user;
};

export const remove = async (userId) => {
    const res = await fetch(`${baseUrl}/${userId}`, {
        method: 'DELETE',
    });
    const result=await res.json();
    return result;
};

export const update = async(userId, userData)=>{
    const { streetNumber, street, city, country, ...data } = userData;
    data.address = {
        streetNumber,
        street,
        city,
        country,
    };

    const res = await fetch(`${baseUrl}/${userId}`, {
        method: 'PUT',
        headers: {
            'content-type': 'application/json',
        },
        body: JSON.stringify(data),
    });

    const result = await res.json();
    return result.user;
}
