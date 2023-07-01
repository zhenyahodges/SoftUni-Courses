const Publication = require('../models/Publication');

exports.create = (publicationData) => Publication.create(publicationData);
exports.getAll = () => Publication.find();
exports.getOne = (publicationId) => Publication.findById(publicationId);
exports.getOneDetailed = (publicationId) =>
    Publication.findById(publicationId).populate('author');
