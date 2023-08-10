const House = require('../models/House');

async function getAll() {
    return House.find({}).lean();
}

async function getById(id) {
    return House.findById(id).lean();
}

async function getLastThree() {
    return House.find().sort({ createdAt: -1 }).limit(3).lean();
}

async function getByIdUsername(id) {
    const user = House.findById(id).lean();
    const username = user.username;
    return username;
}

async function getByUserHouse(userId) {
    return House.find({ owner: userId });
    //   .lean();
}

// async function getByUserRented(userId) {
//     return House.find({ rented: [userId] }).lean();
// }

async function createHouse(house) {
    return await House.create(house);
}

async function update(id, house) {
    const existing = await House.findById(id);

    if (!existing) {
        throw new Error('Publication not found');
    }

    existing.name = house.name;
    existing.type = house.type;
    existing.year = house.year;
    existing.city = house.city;
    existing.imageUrl = house.imageUrl;
    existing.description = house.description;
    existing.free = house.free;

    await existing.save();
}

async function deleteById(id) {
    return await House.findByIdAndDelete(id);
}

async function rent(houseId, userId) {
    // const house = await House.findById(houseId);
    return House.findOneAndUpdate(
        { _id: houseId },
        {
            $push: { rented: userId },
            $inc: { free: -1 },
        }
    );
    // house.rented.push(userId);
    // await house.save();
}

module.exports = {
    getAll,
    getById,
    createHouse,
    update,
    deleteById,
    getByUserHouse,
    rent,
    getByIdUsername,
    // getByUserRented,
    getLastThree,
};
