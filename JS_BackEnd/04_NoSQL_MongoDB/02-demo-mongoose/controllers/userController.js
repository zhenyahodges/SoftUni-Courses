const router=require('express').Router();
const {User}=require('../models/User');

router.get('/', async (req,res)=>{
    const users=await User.find().lean();
    // console.log(users);
    res.render('users', {users});
});

module.exports = router;