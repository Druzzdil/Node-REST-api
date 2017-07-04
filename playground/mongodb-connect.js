
const {MongoClient, ObjectID} = require('mongodb');
let mongoose = require('mongoose');
mongoose.Promise = global.Promise;
MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db )=>{
    if(err){
       return console.log('unable to mongodb server');
    }
    console.log('connected to mongodb');
    db.collection('todos').insertOne({
        text: 'the night is beautifull'
    }).then(function(result) {
        console.log('inserted', result);
    });
    db.close();
});
