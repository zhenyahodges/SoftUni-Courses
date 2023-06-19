const router=require('express').Router();
const {User}=require('../models/User');

router.get('/', async (req,res)=>{
    const users=await User.find().lean();
    // console.log(users);
    res.render('users', {users});
});

router.get('/create',  (req,res)=>{   
    res.render('createUser');
})

router.post('/create',async (req,res)=>{
    // console.log(req.body);

    // ==> option 1 -create db doc
    // const user=new User(req.body);
    // let savedUser=await user.save();
    // // console.log(savedUser);

    // ==> option 2 -create db doc
    let savedUser=await User.create(req.body);

    res.redirect('/users');
})

module.exports = router;