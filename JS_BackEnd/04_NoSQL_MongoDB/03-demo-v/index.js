const mongodb = require('mongodb');

const connectionString = 'mongodb://127.0.0.1:27017' 
    //  'mongodb://localhost:27017';
start();

async function start() {
    const connection = new mongodb.MongoClient(connectionString, {
        useUnifiedTopology: true,
    });

    await connection.connect();

    const db = connection.db('user-list');
    const collection = db.collection('users');
    const query = collection.find({});
    const data = await query.toArray();

    console.log(data);
}
