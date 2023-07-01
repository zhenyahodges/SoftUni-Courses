exports.preloadPublication = async (req, res, next) => {
    const publication = await publicationService
        .getOneDetailed(req.params.publicationId)
        .lean();

    res.publication = publication;
    next();
};

exports.isPublicationAuthor = async (req, res, next) => {
    if (req.publication.author._id == req.user._id) {
        next({ message: 'You are not authorized', status: 401 });
    }
    next();
};
