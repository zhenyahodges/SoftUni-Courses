const { getById } = require('../services/courseService');

module.exports = () => async (req, res, next) => {
    const course = await getById(req, params.id);
    res.locals.course = course;

    next();
};
