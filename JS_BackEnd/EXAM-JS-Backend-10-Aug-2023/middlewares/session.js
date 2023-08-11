const { verifyToken } = require('../services/userService');

module.exports = () => (req, res, next) => {
    const token = req.cookies.token;

    if (token) {
      
        try {
            const userData = verifyToken(token);
       
            req.user = userData;
      
            res.locals.firstname=userData.firstname;
            res.locals.lastname=userData.lastname;
        } catch (error) {
      
            res.clearCookie('token');
            res.redirect('/404');
            return;
        }
    }

    next();
};
