const jwt = require('jsonwebtoken');
const { sessionName, secret } = require('../constants');
const { promisify } = require('util');

const jwtVerify = promisify(jwt.verify);

exports.auth =async (req, res, next) => {
    let token = req.cookies[sessionName];
  

    if (token) {
        try {
            let decodedToken =await jwtVerify(token, secret);
            req.user = decodedToken;
        } catch (err) {
            console.log(err);
            return res.redirect('/404');
        }
    }
    next();
};

// route guard
exports.isAuth = (req, res, next) => {
    if(!req.user){
        return res.redirect('/');
    }
    next();
};
