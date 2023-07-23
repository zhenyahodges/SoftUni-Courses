const mongodb=require('mongodb');

const connectionString='mongodb://127.0.0.1:27017';
// 'mongodb://localhost:27017';

const connection = new mongodb.MongoClient(connectionString,{
    useUnifiedTopology: true
})