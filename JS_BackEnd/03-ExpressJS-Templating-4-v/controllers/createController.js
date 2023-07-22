const { create } = require('../services/productService');

const router = require('express').Router();

router.get('/', (req, res) => {
    res.render('create');
});
router.post('/', async(req, res,next) => {
    console.log(req.body);


        try{
            await create(req.body.name, Number(req.body.price));
            res.redirect('/catalog');
        }catch(err){
            next(err)
        }
  
});

module.exports = router;
