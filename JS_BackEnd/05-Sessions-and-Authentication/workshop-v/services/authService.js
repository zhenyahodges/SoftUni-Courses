

async function login(username, password) {
    return new Promise((res, rej) => {
        if (username.toLowerCase() == 'peter' && password == '123') {
            res({
                _id: 'djfis89d',
                username: 'Peter',
                roles: ['user'],
            });
        }else{
            rej(new Error('Invalid username or password'));
        }
    });
}

module.exports = {
    login,
};
