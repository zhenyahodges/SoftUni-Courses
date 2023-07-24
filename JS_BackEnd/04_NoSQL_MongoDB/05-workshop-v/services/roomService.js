const Room = require('../models/Room');

function getAll(search, city) {
    return Room.find({});
}

function getById(id) {
    return Room.findById(id).lean();
}

module.exports = {
    getAll,
    getById,
};
