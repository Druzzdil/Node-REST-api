
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db )=> {
    if (err) {
        return console.log('unable to mongodb server');
    }
    db.collection('Todos').deleteMany({}).then(function(result) {
        console.log('db was just removed by your latest command');
    });
});

