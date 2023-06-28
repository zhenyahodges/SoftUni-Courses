const router = require('express').Router();

router.get('/login', (req, res) => {
    res.render('auth/login');
})

router.post('/login', (req, res) => {
    console.log(req.body);
})

router.get('/register', (req, res) => {
    res.render('auth/register');
})

router.post('/register', (req, res) => {
    console.log(req.body);
})



module.exports = router;
