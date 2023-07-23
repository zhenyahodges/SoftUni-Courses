// MONGO DB
// const mongodb = require('mongodb');

// const connectionString = 'mongodb://127.0.0.1:27017'
//     //  'mongodb://localhost:27017';
// start();

// async function start() {
//     const connection = new mongodb.MongoClient(connectionString, {
//         useUnifiedTopology: true,
//     });

//     await connection.connect();

//     const db = connection.db('user-list');
//     const collection = db.collection('users');
//     const query = collection.find({});
//     const data = await query.toArray();

//     console.log(data);
// }

// MONGOOSE
const mongoose = require('mongoose');
const Person = require('./models/Person');

const connectionString = 'mongodb://127.0.0.1:27017/testdb2';
start();

async function start() {
    await mongoose.connect(connectionString, {
        useUnifiedTopology: true,
        useNewUrlParser: true,
    });

    console.log('DB connected');

    // const person=new Person({
    //     name: 'Peter',
    //     age:27
    // })

    // await person.save()

    const data = await Person.find({});
    // console.log(data);
    console.log(data[0].sayHi());

    await mongoose.disconnect();
}
