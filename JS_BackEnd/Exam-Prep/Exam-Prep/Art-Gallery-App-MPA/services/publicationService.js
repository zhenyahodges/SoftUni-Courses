const Publication = require('../models/Publication');

exports.getAll =()=> Publication.find();
exports.create = (publicationData) => Publication.create(publicationData);
