const { getAll, getById } = require('../services/roomService');

const router = require('express').Router();

router.get('/',async (req, res) => {

    const user=req.user
    console.log('USER==>',user);

    // search
    // console.log(req.query);
    const search=req.query.search || ''
    const city=req.query.city || ''
    
    // get all rooms
    const rooms = await getAll(search,city)
    // .lean();
    
    res.render('catalog', {
        title: 'Catalog',
        // rooms: [], test empty
        rooms,
        search,
        city
    });
});

router.get('/:id', async (req, res) => {   
    const roomId = req.params.id;
    const room = await getById(roomId);
    // console.log('catalogcontroller==>',room.facilities);

    if(req.user&& req.user._id==room.owner){
        room.isOwner=true;
    }

    if (room) {
        res.render('details', {
            title: 'Details',
            room,
        });
    } else {
        res.render('roomNotFound', {
            title: 'Room Not Found',
            roomId,
            
        });
    }
});

module.exports = router;
