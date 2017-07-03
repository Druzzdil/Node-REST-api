
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db )=> {
    if (err) {
        return console.log('unable to mongodb server');
    }
    db.collection('Todos').find({
        text : "the night is beautifull",
        number: 99
    }).count({text: "walk the cat"}).then((count) =>{
        console.log(count, 'number');
    });

    db.collection('Todos').find({
        text : "the night is beautifull"
    }).toArray().then((docs)=>{
        console.log(JSON.stringify(docs, undefined, 2));
    });
    db.close();
});

