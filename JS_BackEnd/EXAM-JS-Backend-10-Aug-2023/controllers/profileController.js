const { hasUser } = require('../middlewares/guards');
const { getByUserPost, } = require('../services/postService');
const { usernameById } = require('../services/userService');
const profileController = require('express').Router();

profileController.get('/', hasUser(), async (req, res) => {
    const posts = await getByUserPost(req.user._id);
    const user=await usernameById(req.user._id)
  
    res.render('profile', {
        title: 'Profile Page',
        user: Object.assign(
            { posts,user},
            req.user
        ),
    });
});

module.exports = profileController;