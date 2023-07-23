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
    //     firstName: 'Peter',
    //     lastName: 'Smith',
    //     age:27
    // })

    // await person.save()
    // ----------FIND---------------
    // const person=await Person.find({firstName: 'Peter'})
    // console.log(person)
    // always returns array (+objects)

    // const person=await Person.findOne({firstName: 'Peter'})
    // console.log(person[0])

    const person = await Person.findById('64bd0ad2a480675474dec48d');

    // console.log(person);
    // ------------------------

    // const data = await Person.find({});
    // console.log(data);
    // console.log(data[0].sayHi());
    // console.log(data[0].name);
    // ------------------------

    // set data
    // data[0].name = 'Peter Jones';
    // await data[0].save();

    // -------------------
    // person.age=16
    // await person.save()
    // -----------------
    // NB! this doesn't go through validators unless explicit: {runvalidators:true}
    // ~needed for updateMAny
    await Person.findByIdAndUpdate('64bd0ad2a480675474dec48d', {
        $set: { age: 17 },
    });

    await mongoose.disconnect();
}
