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
    const room = await Room.findById(roomId).populate('facilities');
    const facilities = await Facility.find({ _id: { $in: facilitiesIds } });
    
    // console.log('room: ',room);
    // console.log('facilities: ',facilities);
    
    // remove room ref from removed facilities
    const toRemove = room.facilities.filter((f) =>
        facilities.every((x) => x._id.toString() != f._id.toString())
    );
   
    console.log('toRemove: ', toRemove.map(x=>x.label));
    // remove room from facility
    toRemove.forEach((f) => {
        f.rooms.splice(
            f.rooms.findIndex((rid) => rid.toString() ==roomId),
            1
        );
        room.facilities.splice(
            room.facilities.findIndex(
                (x) => x._id.toString() == f._id.toString()
            ),
            1
        );
    });

    // remove facility from room

    // determine new faclilities
    const newlyAdded = facilities.filter((f) =>
        room.facilities.every((x) => x._id.toString() != f._id.toString())
    );
    // console.log('newlyAdded: ', newlyAdded.map(x=>x.label));

    // add room ref to newly added facilities
    newlyAdded.forEach((f) => {
        room.facilities.push(f);
        f.rooms.push(room);
    });

    await room.save();
    await Promise.all(toRemove.map((f) => f.save()));
    await Promise.all(newlyAdded.map((f) => f.save()));

    // console.log(room);
    // console.log(facilities);
}

module.exports = {
    getAllFacilities,
    createFacility,
    addFacilities,
};
