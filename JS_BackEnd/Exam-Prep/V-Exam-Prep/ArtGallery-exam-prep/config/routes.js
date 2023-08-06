const authController = require('../controllers/authController');
const homeController = require('../controllers/homeController');
const profileController = require('../controllers/profileController');
const publicationController = require('../controllers/publicationController');
const { hasUser } = require('../middlewares/guards');

module.exports = (app) => {
    app.use('/', homeController);
    app.use('/auth', authController);
    app.use('/profile',hasUser(), profileController);
    app.use('/publication', publicationController)

};
