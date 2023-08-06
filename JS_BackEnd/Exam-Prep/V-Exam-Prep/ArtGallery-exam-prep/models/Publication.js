const { Schema, model,Types } = require('mongoose');

const publicationSchema=new Schema({
    title:{
        type: String,
        required: true,
    },
    technique:{
        type:String,
        required: true,
    },
    certificate:{
        enum:['YES', 'NO'],
        required: true,
    },
    author:{
        type:
    }
})


const Publication = model('Publication', publicationSchema);

module.exports = Publication;
