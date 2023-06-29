const {promisify}= require('utils');
const jwt= require('jsonwebtoken');

exports.verify = promisify(jwt.verify);
exports.sign = promisify(jwt.sign);

