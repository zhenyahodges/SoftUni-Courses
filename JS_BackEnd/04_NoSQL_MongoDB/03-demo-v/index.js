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
// const Article = require('./models/Article');
const Comment = require('./models/Comment');
const Article = require('./models/Article');
// const Person = require('./models/Person');

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
    // ----------CRUD---------------
    // const person=await Person.find({firstName: 'Peter'})
    // console.log(person)
    // always returns array (+objects)

    // const person=await Person.findOne({firstName: 'Peter'})
    // console.log(person[0])

    // const person = await Person.findById('64bd0ad2a480675474dec48d');

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
    // await Person.findByIdAndUpdate('64bd0ad2a480675474dec48d', {
    //     $set: { age: 17 },
    // });
    // =============QUERIES========
    // await Person.create({
    //     firstName: 'John',
    //     lastName: 'Doe',
    //     age: 18,
    // },
    // {
    //     firstName: 'Ann',
    //     lastName: 'Jones',
    //     age: 28,
    // })
    // -----
    // const result = await Person.find({})
    //     // .where({ age: { $gte: 17 } })
    //     // .and({ age: { $lte: 30 } });
    //     .where('age')
    //     .gte(17)
    //     .lte(30)
    //     // .select('firstName');
    //     // .select('firstName lastName');

    //     // descending
    //     // .sort({age:-1})
    //     // ascending
    //     .sort({age:1})

    //     // useful for pagination
    //     .skip(10)
    //     .limit(10)

    // console.log(result);

    //** */ RELATIONS
    // create data
    // await Article.create({
    //     author: 'Peter',
    //     title: 'First Article',
    //     content: 'llllllllllllllllllllllllllllll'
    // })

    // await Comment.create({
    //     author: 'John',
    //     content: 'Nice article!',
    // });

    // create relation
    // const article = await Article.findOne({});
    // const comment = await Comment.findOne({});
    // auto save as id
    // article.comments.push(comment);
    // await article.save();

    // POPULATE-LOAD ALL DATA REFERENCED WITH THE ENTITY
    const article= await Article.findOne({}).populate('comments');
    console.log(article);

    await mongoose.disconnect();
}
