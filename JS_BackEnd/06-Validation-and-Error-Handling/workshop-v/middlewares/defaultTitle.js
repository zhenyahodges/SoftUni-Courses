module.exports = (defaultTitle) => (req, res, next) => {
    // default context
    res.locals.title = defaultTitle;
    next();
};
