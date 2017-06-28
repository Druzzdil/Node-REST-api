// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');


MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db )=>{
    if(err){
       return console.log('unable to mongodb server');
    }
    console.log('connected to mongodb');
    db.collection('Todos').insertOne({
        text: 'the night is beautifull',
        completed: false
    }, (err, result)=>{
        if (err){
            return console.log('unable to insert todo', err)
        }
        console.log(result.ops[0]._id.toString());
    });
    db.close()
});