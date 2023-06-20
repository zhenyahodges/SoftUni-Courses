const router = require('express').Router();
const { User } = require('../models/User');

router.get('/', async (req, res) => {
    const users=await User.find().lean();
    // lean cant use with methods,so:
    // const users= await User.find();

    // users.forEach((user) => {
    //     console.log(user.getInfo());
    //     console.log(user.isNew);
    // });

    res.render('users', { users });
    // res.render('users', { users: []});
});

router.get('/create', (req, res) => {
    res.render('createUser');
});

router.post('/create', async (req, res) => {
    // ==> option 1 -create db doc
    // const user=new User(req.body);
    // let savedUser=await user.save();
    // // console.log(savedUser);

    // ==> option 2 -create db doc
    let savedUser = await User.create(req.body);

    res.redirect('/users');
});

router.get('/:userId', async(req, res) => {
    let user=await User.findOne({_id: req.params.userId});
    // let user=await User.findById(req.params.userId);
    res.render('userDetails', {user}); 
    // let user=await User.findOne({_id: req.params.userId})
})

module.exports = router;

// CRUD-UPDATE:
// db.user-list.updateOne({firstName:'iuuuuuuuu'}, {$set: {lastname: 'Doe', phoneNumber: '123456'}});
