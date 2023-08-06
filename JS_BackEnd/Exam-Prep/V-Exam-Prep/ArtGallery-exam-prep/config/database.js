const mongoose = require('mongoose');

const CONNECTION_STRING =
    `mongodb://127.0.0.1:27017/artGalleryDb`;   

module.exports = async (app) => {
    try {
        await mongoose.connect(CONNECTION_STRING, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log('DB connected');
    } catch (err) {
        console.log(err.message);
        process.exit(1);
    }
};
