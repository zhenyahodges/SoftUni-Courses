const { Router } = require('express');

const router = Router();

router.get('/', (req, res) => {
    res.send('<form method="post"><input name="name"><button>Send</button></form>');
});
router.post('/', (req, res) => {
    res.redirect('/catalog');
});

module.exports = router;
