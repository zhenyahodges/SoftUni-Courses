const bcrypt = require('bcrypt');
const User = require('../models/User');

async function register(username, password) {
    const existing = await User.findOne({
        // username: { $regex: new RegExp(username), $options: 'i' },
        username,
    })
    // .collation({ locale: 'en', strength: 2 });

    if (existing) {
        throw new Error('Username already registered');
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const user = await User.create({ username, hashedPassword });
    return {
        username,
        roles: user.roles,
    };
}

async function login(username, password) {
    // return new Promise((res, rej) => {
    //     if (username.toLowerCase() == 'peter' && password == '123') {
    //         res({
    //             _id: 'djfis89d',
    //             username: 'Peter',
    //             roles: ['user'],
    //         });
    //     } else {
    //         rej(new Error('Invalid username or password'));
    //     }
    // });

    const user = await User.findOne({
        // username: { $regex: new RegExp(username), $options: 'i' },
        username,
    }).collation({ locale: 'en', strength: 2 });

    if (!user) {
        throw new Error('Incorrect username or password');
    }

    const match = await bcrypt.compare(password, user.hashedPassword);
    if (!match) {
        throw new Error('Incorrect username or password');
    }

    return {
        username: user.username,
        roles: user.roles,
    };
}

module.exports = {
    register,
    login,
};
