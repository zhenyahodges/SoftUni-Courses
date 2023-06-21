const mongoose = require('mongoose');

const accessorySchema=new mongoose.Schema({
    name: {
        type:String,
        required: true,        
    },
    imageUrl: {
        type: String,
        required: true,
        validate: {
            // validator: /^https?/g,
            validator: function(){
                return this.imageUrl.startsWith('http');
            },
            message: 'Image url should start with http'
        }
    },
    description:{
        type: String,
        maxLength:300,
        required: true,
    },
     cubes:[
        {
        type: mongoose.Types.ObjectId,
        ref: 'Cube'
     },
    ],
});

const Accessory= mongoose.model('Accessory',accessorySchema);
module.exports = Accessory;