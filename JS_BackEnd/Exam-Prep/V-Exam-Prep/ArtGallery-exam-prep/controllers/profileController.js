const { hasUser } = require('../middlewares/guards');
const User = require('../models/User');
const {
    getByUserPublication,
    getByUserShares,
} = require('../services/publicationService');
const profileController = require('express').Router();

profileController.get('/', hasUser(), async (req, res) => {
    const publications = await getByUserPublication(req.user._id);
    const shares = await getByUserShares(req.user._id);
    console.log('pubs--' + publications);
    console.log('shares--' + shares);

    const userData = await User.findById(req.user._id);
    const address = userData.address;

    const publishedByUser = publications.map((p) => p.title).join(', ');
    const sharedByUser = shares.map((p) => p.title).join(', ');

    res.render('profile', {
        title: 'Profile Page',
        user: Object.assign(
            { address, publications, publishedByUser, sharedByUser },
            req.user
        ),
    });
});

module.exports = profileController;
