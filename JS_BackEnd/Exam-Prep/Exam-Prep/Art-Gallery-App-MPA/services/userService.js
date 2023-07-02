const User = require('../models/User');

exports.getOne = (userId) => User.findById(userId);

exports.addPublication = async (userId, publicationId) => {
    // const user = await User.findById(userId);
    // user.publications.push(publicationId);

    // return user.save()
    return User.updateOne({ _id: userId }, { $push: { publications: publicationId } });
}
