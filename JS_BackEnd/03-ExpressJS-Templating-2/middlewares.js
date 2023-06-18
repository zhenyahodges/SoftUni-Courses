const cats = [];

// middleware
exports.catMiddleware = (req, res, next) => {
    console.log('cat middleware');
    req.cats = cats;

    next();
};
