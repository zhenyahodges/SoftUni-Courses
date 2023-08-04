const Hotel = require('../models/Hotel');

async function getAll() {}

async function getbyId(id) {}

async function create(hotel) {
    return await Hotel.create(hotel);
}

async function update(id, hotel) {}

async function deleteById(id) {}

async function bookRoom(hotelId, userId) {}

module.exports = {
    getAll,
    getbyId,
    create,
    update,
    deleteById,
    bookRoom,
};
