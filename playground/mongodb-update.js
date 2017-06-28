
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db )=> {
    if (err) {
        return console.log('unable to mongodb server');
    }
    db.collection('Todos').findOneAndUpdate({
        _id: new ObjectID('5953f4f8df25832cf874e656')
    }, {
        $set: {
            text: 'the night is nearly over',
            completed: true
        }
    }, {
        returnOriginal: false
    }).then((results)=>{
        console.log(results);
    })
});

