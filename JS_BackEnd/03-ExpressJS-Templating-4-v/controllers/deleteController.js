const { getById, deleteById } = require('../services/productService');
const router = require('express').Router();

router.get('/:id', (req, res) => {
    const id = req.params.id;
    const product = getById(id);
    // validation needed

    res.render('delete', product);
});

router.post('/:id', async(req, res) => {
    const id = req.params.id;
   await deleteById(id)
    // validation needed
res.redirect('/catalog')
});

module.exports = router;
