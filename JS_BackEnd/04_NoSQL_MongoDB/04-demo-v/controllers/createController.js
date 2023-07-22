const { create } = require('../services/accomService');

const router = require('express').Router();

router.get('/', (req,res)=>{
    res.render('create',{
        title: 'Host New Accomodation'
    })
})

router.post('/', async(req,res)=>{
    console.log(req.body);

    try {
        const result=await create(req.body)
        
        res.redirect('/catalog/'+result.id)
    } catch (err) {
        res.render('create', {
            title: 'Error creating'
        })
    }
    
})


module.exports = router;