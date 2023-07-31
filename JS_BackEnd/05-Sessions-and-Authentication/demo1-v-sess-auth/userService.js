const fs=require('fs');
const bcrypt = require('bcrypt');

// const users = [];
const users = JSON.parse(fs.readFileSync('./users.txt'));

async function register(username, password) {
    if (
        users.find((u) => u.username.toLowerCase() === username.toLowerCase())
    ) {
        throw new Error('Username is taken');
    }

    const user = {
        username,
        hashedPassword: await bcrypt.hash(password, 10),
        failedAttempts: 0,
        role: ['user']
    };
    users.push(user);

    await new Promise(res=>fs.writeFile('./users.txt', JSON.stringify(users,null,2), res));
}

async function login(username, password) {
    const user = users.find(
        (u) => u.username.toLowerCase() === username.toLowerCase()
    );

    if (!user) {
        throw new Error('Invalid username or password');
    } else {
        if (user.failedAttempts >= 3) {
            throw new Error('User profile is locked.');
        }

        const success = await bcrypt.compare(password, user.hashedPassword);
        if (success) {
            user.failedAttempts = 0;
            return user;
        } else {
            user.failedAttempts++;
            throw new Error('Invalid username or password');
        }
    }
}

// async function getUser() {

// }

// async function logout(){

// }

module.exports = {
    users,
    register,
    login,
};