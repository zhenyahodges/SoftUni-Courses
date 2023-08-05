const Course = require('../models/Course');

async function getAllByDate() {
    return await Course.find({}).sort({ createdAt: 1 }).lean();
}

async function getRecent() {
    return await Course.find({}).sort({ userCount: -1 }).limit(3).lean();
}

async function createCourse(course) {
    return await Course.create(course);
}

async function getById(id) {
    return Course.findById(id).lean();
}

async function deleteById(id) {
    return Course.findByIdAndDelete(id);
}

async function updateById(id, data) {
    const existing = await Course.findById(id);

    existing.title = data.title;
    existing.description = data.description;
    existing.imageUrl = data.imageUrl;
    existing.duration = data.duration;

    return existing.save();
}

async function enrollUser(courseId,userId){
   const existing = await Course.findById(courseId);

   existing.users.push(userId);
   existing.userCount++
   return existing.save();
}

module.exports = {
    getAllByDate,
    createCourse,
    getRecent,
    getById,
    deleteById,
    updateById,
    enrollUser
};
