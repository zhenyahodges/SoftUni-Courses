const { hasUser } = require('../middlewares/guards');
const User = require('../models/User');
// const { getByUserBooking } = require('../services/hotelService');
const profileController = require('express').Router();

profileController.get('/', hasUser(), async (req, res) => {
    // TODO
    // const bookings = await getByUserBooking(req.user._id);
    // console.log(bookings);
    
    const userData= await User.findById(req.user._id)
    const address=userData.address
    
    // console.log(address);
    // console.log(req.user);

    res.render('profile', {
        title: 'Profile Page',
        user: Object.assign(
            // { bookings },
            req.user,
            {address}
          
        ),
    });
});

module.exports = profileController;
