const router = require('express').Router();
const { isAuth } = require('../middlewares/authMiddleware');
const {
    preloadPublication,
    isPublicationAuthor,
} = require('../middlewares/publicationMiddleware');
const publicationService = require('../services/publicationService');
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

    res.render('publication/details', { ...publication, isAuthor });
});

router.get('/create', isAuth, (req, res) => {
    res.render('publication/create');
});

// CREATE PUBLICATION
router.post('/create', isAuth, async (req, res) => {
    const publicationData = { ...req.body, author: req.user._id };
    try {
        await publicationService.create(publicationData);

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

router.post('/:publicationId/edit', 
isAuth, 
preloadPublication, 
isPublicationAuthor,
async (req, res) => {   
   
    try {
        await publicationService.updateOne(req.params.publicationId, req.body);

        res.redirect(`/publications/${req.params.publicationId}/details`);
    } catch (err) {
        res.render('publication/edit', {
            ...req.body,
            error: getErrorMessage(err),
        });
    }
});

module.exports = router;
