const bcrypt = require('bcrypt');

async function hash(password) {
    return bcrypt.hash(password, 10);
}

async function compare(password, hashedPassword) {
    return bcrypt.compare(password, hashedPassword);
}

module.exports = {
    hash,
    compare,
};
