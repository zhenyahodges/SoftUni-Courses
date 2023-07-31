const Room = require('../models/Room');

function getAll(search, city) {
    return Room.find({}).lean();
}

function getById(id) {
    return Room.findById(id).populate('facilities', 'label iconUrl').lean();
}

async function create(roomData, ownerId) {
    const room = {
        name: roomData.name,
        description: roomData.description,
        city: roomData.city,
        beds: Number(roomData.beds),
        price: Number(roomData.price),
        imageUrl: roomData.imageUrl,
        owner: ownerId,
    };

    const missing = Object.entries(room).filter(([k, v]) => !v);
    if (missing.length > 0) {
        throw new Error(missing.map((m) => `${m[0]} is Required`).join('\n '));
    }

    const result = await Room.create(room);

    return result;
}

async function update(roomId, roomData) {
    const missing = Object.entries(roomData).filter(([k, v]) => !v);
    if (missing.length > 0) {
        throw new Error(missing.map((m) => `${m[0]} is Required`).join('\n '));
    }
    
    const room = await Room.findById(roomId);

    room.name = roomData.name;
    room.description = roomData.description;
    room.city = roomData.city;
    room.beds = Number(roomData.beds);
    room.price = Number(roomData.price);
    room.imageUrl = roomData.imageUrl;

    

    await room.save();
    return room;
}

module.exports = {
    getAll,
    getById,
    create,
    update,
};
