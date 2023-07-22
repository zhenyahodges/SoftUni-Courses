const router=require('express').Router();

router.get('/', (req,res)=>{
    res.render('create')
})
router.post('/', (req,res)=>{
    res.render('post')
    res.redirect('/catalog')
})

module.exports = router;