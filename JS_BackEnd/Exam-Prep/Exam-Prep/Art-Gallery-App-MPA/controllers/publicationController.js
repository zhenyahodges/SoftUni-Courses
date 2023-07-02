const router = require('express').Router();
const { isAuth } = require('../middlewares/authMiddleware');
const {
    preloadPublication,
    isPublicationAuthor,
} = require('../middlewares/publicationMiddleware');
const publicationService = require('../services/publicationService');
const userService = require('../services/userService');
const { getErrorMessage } = require('../utils/errorHelpers');

// ALL PUBLICATIONS
router.get('/', async (req, res) => {
    const publications = await publicationService.getAll().lean();

    res.render('publication', { publications });
});

// PUBLICATION DETAILS
router.get('/:publicationId/details', async (req, res) => {
    const publication = await publicationService
        .getOneDetailed(req.params.publicationId)
        .lean();
    const isAuthor = (await publication.author._id) == req.user?._id;
    const isShared = publication.usersShared.includes(req.user._id);

    // console.log(isShared);
    console.log(req.user._id);
    console.log(publication.usersShared);
    // db.collection('inventory').find({
    //     instock: { warehouse: 'A', qty: 5 }

    res.render('publication/details', { ...publication, isAuthor, isShared });
});

router.get('/create', isAuth, (req, res) => {
    res.render('publication/create');
});

// CREATE PUBLICATION
router.post('/create', isAuth, async (req, res) => {
    const publicationData = { ...req.body, author: req.user._id };
    
    try {
        const publication = await publicationService.create(publicationData);
        await userService.addPublication(req.user._id, publication._id);

        res.redirect('/publications');
    } catch (err) {
        res.render('publication/create', {
            ...req.body,
            error: getErrorMessage(err),
        });
    }
});

// EDIT PUBLICATION
router.get(
    '/:publicationId/edit',
    isAuth,
    preloadPublication,
    isPublicationAuthor,
    (req, res) => {
        res.render('publication/edit', { ...req.publication });
    }
);

router.post(
    '/:publicationId/edit',
    isAuth,
    preloadPublication,
    isPublicationAuthor,
    async (req, res) => {
        try {
            await publicationService.updateOne(
                req.params.publicationId,
                req.body
            );

            res.redirect(`/publications/${req.params.publicationId}/details`);
        } catch (err) {
            res.render('publication/edit', {
                ...req.body,
                error: getErrorMessage(err),
            });
        }
    }
);

// DELETE
router.get(
    '/:publicationId/delete',
    isAuth,
    preloadPublication,
    isPublicationAuthor,
    async (req, res) => {
        await publicationService.delete(req.params.publicationId);
        res.redirect('/publications');
    }
);

// SHARE
router.get('/:publicationId/share', isAuth, async (req, res) => {
    const publication = await publicationService.getOne(
        req.params.publicationId
    );

    publication.usersShared.push(req.user._id);
    await publication.save();

    res.redirect('/');
});

module.exports = router;
