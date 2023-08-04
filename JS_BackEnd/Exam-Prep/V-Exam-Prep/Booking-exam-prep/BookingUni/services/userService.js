const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const User = require('../models/User');

const JWT_SECRET = 'sfusi8fs9fjs';

async function register(email,username, password) {
    const existingUsername = await User.findOne({ username }).collation({
        locale: 'en',
        strength: 2,
    });

    const existingEmail = await User.findOne({ email }).collation({
        locale: 'en',
        strength: 2,
    });

    if (existingUsername) {
        throw new Error('Username is taken');
    }
    if (existingEmail) {
        throw new Error('Email is taken');
    }
    const hashedPassword = await bcrypt.hash(password, 10);

    const user = await User.create({
        email,
        username,
        hashedPassword,
    });

    // TODO see assignment if registration creates user session
    const token = createSession(user);
    return token;
}

// LOGIN
async function login(email,password) {
    const user = await User.findOne({ email }).collation({
        locale: 'en',
        strength: 2,
    });

    if (!user) {
        throw new Error('Incorrect email or password');
    }

    const hasMatch = await bcrypt.compare(password, user.hashedPassword);

    if (hasMatch == false) {
        throw new Error('Incorrect email or password');
    }

    const token = createSession(user);
    return token;
}

async function logout() {}

function createSession({ _id, email, username }) {
    const payload = {
        _id,
        email,
        username,
    };

    const token = jwt.sign(payload, JWT_SECRET);
    return token;
}

function verifyToken(token) {
    return jwt.verify(token, JWT_SECRET)
}

module.exports = {
    register,
    login,
    logout,
    verifyToken
};
