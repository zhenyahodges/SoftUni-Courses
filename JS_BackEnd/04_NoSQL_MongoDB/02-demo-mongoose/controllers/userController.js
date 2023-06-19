const router=require('express').Router();
const {User}=require('../models/User');

router.get('/', async (req,res)=>{
    const users=await User.find().lean();
    // console.log(users);
    res.render('users', {users});
});

router.get('/create', (req,res)=>{
    res.render('createUser');
})

router.post('/create', (req,res)=>{
    console.log(req.body);

    res.redirect('/users');
})

module.exports = router;