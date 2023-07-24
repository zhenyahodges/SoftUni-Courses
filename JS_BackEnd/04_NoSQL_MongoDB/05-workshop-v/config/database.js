const mongoose = require('mongoose');

// process.env.DATABASE_CONNECTION_STRING

const connectionString = 'mongodb://127.0.0.1:27017/sf-booking';

module.exports = async (app) => {
    try {
        await mongoose.connect(connectionString, {
            useUnifiedTopology: true,
            useNewUrlParser: true,
        });
        console.log('DB connection established');
    } catch (err) {
        console.log('Error-db');
        console.log(err.message);
        // terminates server
        process.exit(1);
    }
};
