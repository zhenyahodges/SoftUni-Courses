const Post = require('../models/Post');

async function getAll() {
    return Post.find({}).lean();
}

async function getById(id) {
    return Post.findById(id).lean();
}

async function getLastThree() {
    return Post.find().sort({ createdAt: -1 }).limit(3).lean();
}

async function getByIdUsername(id) {
    const user = Post.findById(id).lean();
    const username = user.username;
    return username;
}

async function getByUserPost(userId) {
    return Post.find({ owner: userId }).lean();
}

async function getByUserVoted(userId) {
    return Post.find({ voted: [userId] }).lean();
}

async function createPost(post) {
    return await Post.create(post);
}

async function update(id, post) {
    const existing = await Post.findById(id);

    if (!existing) {
        throw new Error('Publication not found');
    }

    existing.name = post.name;
    existing.species = post.species;
    existing.imageUrl = post.imageUrl;
    existing.skin = post.skin;
    existing.eye = post.eye;
    existing.description = post.description;

    await existing.save();
}

async function deleteById(id) {
    return await Post.findByIdAndDelete(id);
}

async function vote(postId, userId) {
    return Post.findOneAndUpdate(
        { _id: postId },
        {
            $push: { voted: userId },
            $inc: { free: -1 },
        },
        { runValidators: true }
    );
}

module.exports = {
    getAll,
    getById,
    createPost,
    update,
    deleteById,
    getByUserPost,
    vote,
    getByIdUsername,
    getByUserVoted,
    getLastThree,
};
