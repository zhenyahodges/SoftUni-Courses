const {Router}=require('express')

const router=Router();

router.get('/', (req, res) => {
    res.send('Catalog');
});

router.get('/:productId', (req, res) => {
    console.log(req.params.productId);
    res.send('Product details');
});

router.get('/:categoryIg/:id', (req, res) => {
    console.log(req.params);
    res.send('Nested params');
});

module.exports = router;