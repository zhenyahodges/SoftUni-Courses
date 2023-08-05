const { verifyToken } = require('../services/userService');

module.exports = () => (req, res, next) => {
    const token = req.cookies.token;

    if (token) {
        // console.log(token);
        try {
            const userData = verifyToken(token);
            // console.log('read success', userData);
            req.user = userData;
            // TODO add user data
            // res.locals.username=userData.username;
        } catch (error) {
            // console.log('invalid token');
            res.clearCookie('token');
            res.redirect('/auth/login');
            return;
        }
    }

    next();
};
