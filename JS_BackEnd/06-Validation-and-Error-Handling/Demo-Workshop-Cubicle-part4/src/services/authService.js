const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
// const {promisify} = require('util');

const User = require('../models/User');
const { saltRounds, secret } = require('../constants');

exports.register = async ({ username, password, repeatPassword }) => {
    // TODO return form validation message
    // if (password !== repeatPassword) {
    //     return false;
    // }
    let hashedPassword = await bcrypt.hash(password, saltRounds);

    // let createdUser = await User.create({
    //     username,
    //     password: hashedPassword,
    // });

    try {
        let createdUser = await User.create({
            username,
            password,
            repeatPassword,
        });
        return createdUser;
    } catch (err) {
        console.log(err);
        return err;
    }

    // await createdUser.save();

    // return createdUser;
};

exports.login = async ({ username, password }) => {
    let user = await User.findOne({ username });
    if (!user) {
        // TODO ERR MESSAGE
        return;
    }

    const isValid = await bcrypt.compare(password, user.password);
    // console.log(isValid);

    if (!isValid) {
        throw {
            message: 'Invalid username or password.',
        };
    }

    // custom promise
    let result = new Promise((resolve, reject) => {
        jwt.sign(
            { _id: user._id, username: user.username },
            secret,
            { expiresIn: '2d' },
            (err, token) => {
                if (err) {
                    return reject(err);
                }
                resolve(token);
            }
        );
    });
    return result;

    // const jwtPromiseSign=promisify(jwt.sign());
    // jwtPromiseSign();
};
