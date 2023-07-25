const Facility = require('../models/Facility');

async function getAllFacilities() {
    return Facility.find({}).lean();
}

async function createFacility(label, iconUrl) {
    return Facility.create({
        label,
        iconUrl,
    });
}

module.exports = {
    getAllFacilities,
    createFacility,
};
