exports.errorHandler = (err, req, res, next) => {
    res.render('404', { error: err.message });
};
