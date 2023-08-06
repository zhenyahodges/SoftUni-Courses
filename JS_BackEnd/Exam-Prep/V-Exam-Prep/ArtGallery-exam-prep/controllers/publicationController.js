const {
    getById,
    share,
    deleteById,
    update,
    createPublication,
} = require('../services/publicationService');
const { parseError } = require('../utils/parser');
const publicationController = require('express').Router();

// DETAILS
publicationController.get('/:id/details', async (req, res) => {
    const publication = await getById(req.params.id);
    console.log(publication);

    let author;
    const user = req.user;

    if (user && publication.author == req.user._id) {
        publication.isAuthor = true;
        author = req.user.username;
    } else if (user && publication.author !== req.user._id) {
        const result = publication.shared
            .map((b) => b.toString())
            .includes(req.user._id.toString());
        if (result) {
            publication.isShared = true;
        } else {
            publication.isShared = false;
        }
    }

    res.render('details', {
        title: 'Publication Details',
        publication: Object.assign(publication, { author, user }),
        user,
    });
});

// CREATE publication
publicationController.get('/create', (req, res) => {
    res.render('create', {
        title: 'Create Publication ',
    });
});

publicationController.post('/create', async (req, res) => {
    // console.log(req.body);
    const publication = {
        title: req.body.title,
        technique: req.body.technique,
        imageUrl: req.body.imageUrl,
        certificate: req.body.certificate,
        author: req.user._id,
    };
    // console.log(publication);

    // console.log(title,technique,imageUrl,certificate,author);
    try {
        if (Object.values(publication).some((v) => !v)) {
            throw new Error('All fields are required');
        }

        await createPublication(publication);
        res.redirect('/gallery');
    } catch (error) {
        // console.log(error.message);
        res.render('create', {
            title: 'Create Publication ',
            errors: parseError(error),
            body: publication,
        });
    }
});

// EDIT publication
publicationController.get('/:id/edit', async (req, res) => {
    const publication = await getById(req.params.id);

    // console.log(publication.author);
    // console.log(req.user);
    // console.log(publication);
    // console.log(publication.author != req.user._id);

    if (publication.author != req.user._id) {
        return res.redirect('/auth/login');
    }

    res.render('edit', {
        title: 'Edit Publication',
        publication,
    });
});

publicationController.post('/:id/edit', async (req, res) => {
    const id = req.params.id;
    const publication = await getById(id);

    if (publication.author != req.user._id) {
        return res.redirect('/auth/login');
    }

    const edited = {
        title: req.body.title,
        technique: req.body.technique,
        imageUrl: req.body.imageUrl,
        certificate: req.body.certificate,
    };
    // console.log(edited);

    try {
        if (Object.values(edited).some((v) => !v)) {
            throw new Error('All fields are required');
        }

        await update(id, edited);
        res.redirect(`/publication/${id}/details`);
    } catch (error) {
        res.render('edit', {
            title: 'Edit Publication ',
            errors: parseError(error),
            publication: Object.assign(publication, { _id: id }),
        });
    }
});

// DELETE
publicationController.get('/:id/delete', async (req, res) => {
    const publication = await getById(req.params.id);

    if (publication.author != req.user._id) {
        return res.redirect('/auth/login');
    }

    await deleteById(req.params.id);
    res.redirect('/gallery');
});

// SHARE
publicationController.get('/:id/share', async (req, res) => {
    const id = req.params.id;
    const userId = req.user._id;
    const publication = await getById(id);

    try {
        if (publication.author == userId) {
            publication.isAuthor = true;
            throw new Error('You already shared this publication');
        }

        if (
            publication.shared
                .map((b) => b.toString())
                .includes(userId.toString())
        ) {
            publication.isShared = true;
            throw new Error('Cannot publish same room twice');
        }

        await share(id, userId);
        res.redirect(`/`);
    } catch (error) {
        res.render('details', {
            title: 'Publication Details',
            publication,
            errors: parseError(error),
        });
    }
});

module.exports = publicationController;
