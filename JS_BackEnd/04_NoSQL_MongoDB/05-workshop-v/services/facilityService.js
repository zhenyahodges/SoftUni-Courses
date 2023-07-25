const Facility = require('../models/Facility');
const Room = require('../models/Room');

async function getAllFacilities() {
    return Facility.find({}).lean();
}

async function createFacility(label, iconUrl) {
    return Facility.create({
        label,
        iconUrl,
    });
}

async function addFacilities(roomId, facilitiesIds) {
    const room = await Room.findById(roomId);
    const facilities = await Facility.find({ _id: { $in: facilitiesIds } });

    // remove room ref from removed facilities
    const toRemove = room.facilities.filter((f) =>
        facilities.every((x) => x._i !== f._id)
    );
    console.log('toRemove',toRemove);

    // determine new faclilities
    const newlyAdded = facilities.filter((f) =>
        room.facilities.every((x) => x._id != f._id)
    );
    console.log('newlyAdded',newlyAdded);

    // add room ref to newly added facilities
    newlyAdded.forEach((f) => {
        room.facilities.push(f);
        f.rooms.push(room);
    });

    await room.save();
    await Promise.all(newlyAdded.map((f) => f.save()));

    // console.log(room);
    // console.log(facilities);
}

module.exports = {
    getAllFacilities,
    createFacility,
    addFacilities,
};
