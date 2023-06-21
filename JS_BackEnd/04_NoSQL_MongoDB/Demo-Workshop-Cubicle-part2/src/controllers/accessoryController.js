const router= require('express').Router();

router.get('/create',async(req, res)=>{
    res.render('accessory/create')
})


module.exports = router;
