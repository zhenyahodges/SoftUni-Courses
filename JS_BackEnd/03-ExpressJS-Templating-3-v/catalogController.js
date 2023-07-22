const {Router}=require('express')

const router=Router();

router.get('/catalog', (req, res) => {
    res.send('Catalog');
});

router.get('/catalog/:productId', (req, res) => {
    console.log(req.params.productId);
    res.send('Product details');
});

router.get('/catalog/:categoryIg/:id', (req, res) => {
    console.log(req.params);
    res.send('Nested params');
});

module.exports = router;