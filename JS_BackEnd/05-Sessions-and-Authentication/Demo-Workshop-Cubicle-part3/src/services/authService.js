const bcrypt = require('bcrypt');

const User = require('../models/User');
const saltRounds = 10;

exports.register = async ({ username, password, repeatPassword }) => {
    // TODO return form validation message
    if (password !== repeatPassword) {
        return false;
    }
    let hashedPassword = await bcrypt.hash(password, saltRounds);

    let createdUser = await User.create({
        username,
        password: hashedPassword,
    });

    // let createdUser = new User({
    //     username,
    //     password: hashedPassword,
    // });
    // await createdUser.save();

    return createdUser;
};

exports.login = async ({ username, password }) => {
    let user = await User.findOne({ username });
    if (!user) {
        // TODO ERR MESSAGE
        return;
    }

    const isValid = await bcrypt.compare(password, user.password);
    console.log(isValid);

    if (isValid) {
        return user;
    } else {
        return;
    }
};
