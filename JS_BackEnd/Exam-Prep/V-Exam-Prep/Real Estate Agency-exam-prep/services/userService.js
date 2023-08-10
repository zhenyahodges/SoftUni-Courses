const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const User = require('../models/User');

const JWT_SECRET = 'sfusi8fs9fjs';

async function register(fullname, username, password) {
    const existing = await User.findOne({ username }).collation({
        locale: 'en',
        strength: 2,
    });

    if (existing) {
        throw new Error('Username is taken');
    }
    const hashedPassword = await bcrypt.hash(password, 10);

    const user = await User.create({
        fullname,
        username,
        hashedPassword,
    });

    const token = createSession(user);
    return token;
}

// LOGIN
async function login(username, password) {
    const user = await User.findOne({ username }).collation({
        locale: 'en',
        strength: 2,
    });

    if (!user) {
        throw new Error('Incorrect username or password');
    }

    const hasMatch = await bcrypt.compare(password, user.hashedPassword);

    if (hasMatch == false) {
        throw new Error('Incorrect username or password');
    }

    const token = createSession(user);
    return token;
}

async function logout() {}

function createSession({ _id, username }) {
    const payload = {
        _id,
        username,
    };

    const token = jwt.sign(payload, JWT_SECRET);
    return token;
}

function verifyToken(token) {
    return jwt.verify(token, JWT_SECRET);
}

async function usernameById(_id) {
    const user = await User.findOne({ _id })
        .collation({
            locale: 'en',
            strength: 2,
        })
        .lean();
    return user.fullname;
}

module.exports = {
    register,
    login,
    logout,
    verifyToken,
    usernameById,
};
