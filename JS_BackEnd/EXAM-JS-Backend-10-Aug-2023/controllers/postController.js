const postController = require('express').Router();
const { hasUser } = require('../middlewares/guards');

const {
    createPost,
    getById,
    vote,
    update,
    deleteById,
    getByUserVoted,
} = require('../services/postService');
const { usernameById } = require('../services/userService');
const { parseError } = require('../utils/parser');

postController.get('/', (req, res) => {
    res.render('post', {
        title: 'post Page',
        user: req.user,
    });
});

// DETAILS
postController.get('/:id/details', async (req, res) => {
    const post = await getById(req.params.id);
    const user = req.user;

    // VOTES?
    const votersIds = post.voted.map((r) => r.toString());

    post.votesCount = votersIds.length;
    votersIds.length > 0 ? (post.isVoted = true) : (post.isVoted = false);

    let votersNames = [];
    for (let i = 0; i < votersIds.length; i++) {
        let uname = await usernameById(votersIds[i]);
        votersNames.push(uname);
    }
    post.votersList = votersNames.join(', ');
    console.log(post.votersList);

    // OWNER?
    if (user && post.owner == user._id) {
        post.isOwner = true;
    } else if (user && post.owner != user._id) {
        post.isOwner = false;
        post.user = user;

        // USER hasVoted
        const result = post.voted
            .map((b) => b.toString())
            .includes(user._id.toString());

        if (result) {
            post.hasVoted = true;
        } else {
            post.hasVoted = false;
        }
    }
    console.log('post?==' + Object.entries(post));

    res.render('details', {
        title: 'post Details',
        post,
        user,
    });
});

// CREATE
postController.get('/create', hasUser(), (req, res) => {
    res.render('create', {
        title: 'Create Post Page',
        user: req.user,
    });
});

postController.post('/create', hasUser(), async (req, res) => {
    const post = {
        name: req.body.name,
        species: req.body.species,
        imageUrl: req.body.imageUrl,
        skin: req.body.skin,
        eye: req.body.eye,
        description: req.body.description,
        owner: req.user._id,
    };

    try {
        if (Object.values(post).some((v) => !v)) {
            throw new Error('All fields are required');
        }

        await createPost(post);
        res.redirect('/posts');
    } catch (error) {
        res.render('create', {
            title: 'Create Post Page ',
            errors: parseError(error),
            body: post,
        });
    }
});

// EDIT
postController.get('/:id/edit', hasUser(), async (req, res) => {
    const post = await getById(req.params.id);
    console.log(post);

    if (post.owner != req.user._id) {
        return res.redirect('/404');
    }

    res.render('edit', {
        title: 'Edit post',
        post,
    });
});

postController.post(
    '/:id/edit',

    hasUser(),
    async (req, res) => {
        const id = req.params.id;
        const post = await getById(id);

        if (post.owner != req.user._id) {
            return res.redirect('/404');
        }

        const edited = {
            name: req.body.name,
            species: req.body.species,
            imageUrl: req.body.imageUrl,
            skin: req.body.skin,
            eye: req.body.eye,
            description: req.body.description,
        };

        try {
            if (Object.values(edited).some((v) => !v)) {
                throw new Error('All fields are required');
            }

            await update(id, edited);
            res.redirect(`/post/${id}/details`);
        } catch (error) {
            res.render('edit', {
                title: 'Edit post ',
                errors: parseError(error),
                post: Object.assign(post, { _id: id }),
            });
        }
    }
);

// DELETE
postController.get('/:id/delete', hasUser(), async (req, res) => {
    const post = await getById(req.params.id);

    if (post.owner != req.user._id) {
        return res.redirect('/404');
    }

    await deleteById(req.params.id);
    res.redirect('/posts');
});

//Vote
postController.get('/:id/vote', hasUser(), async (req, res) => {
    const id = req.params.id;
    const userId = req.user._id;
    const post = await getById(id);

    try {
        if (post.owner == userId) {
            post.isOwner = true;
            throw new Error('Cannot vote for your own post');
        }

        if (post.voted.map((b) => b.toString()).includes(userId.toString())) {
            post.hasVoted = true;
            throw new Error('Thanks For Voting');
        }

        await vote(id, userId);
        res.redirect(`/post/${id}/details`);
    } catch (error) {
        res.render('details', {
            title: 'post Details',
            post,
            errors: parseError(error),
        });
    }
});

module.exports = postController;
