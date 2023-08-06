const Publication = require('../models/Publication');

async function getAll() {
    return Publication.find({}).lean();
}

async function getById(id) {
    return Publication.findById(id).lean();
}

async function getByIdUsername(id) {
    const user = Publication.findById(id).lean();
    const username = user.username;
    return username;
}

async function getByUserPublication(userId) {

  return  Publication.find({author :userId})
//   .lean();
    
}

async function getByUserShares(userId) {
    return Publication.find({ shared: [userId] }).lean();
}

async function createPublication(publication) {
    return await Publication.create(publication);
}

async function update(id, publication) {
    const existing = await Publication.findById(id);

    if (!existing) {
        throw new Error('Publication not found');
    }

    existing.title = publication.title;
    existing.technique = publication.technique;
    existing.imageUrl = publication.imageUrl;
    existing.certificate = publication.certificate;

    await existing.save();
}

async function deleteById(id) {
    return await Publication.findByIdAndDelete(id);
}

async function share(publicationId, userId) {
    const publication = await Publication.findById(publicationId);

    publication.shared.push(userId);
    await publication.save();
}

module.exports = {
    getAll,
    getById,
    createPublication,
    update,
    deleteById,
    getByUserPublication,
    share,
    getByIdUsername,
    getByUserShares,
};
