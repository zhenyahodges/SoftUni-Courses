exports.errorHandler = (err, req, res, next) => {
    // res.status(404).render('404', { error: err.message });
    const status=err.status || 404
    const errMessage=err.message || 'Something went wrong'
    // res.status(status).render('404', { error: err.message });
    res.status(status).render('404', { error: errMessage });
};
