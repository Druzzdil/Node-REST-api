
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db )=> {
    if (err) {
        return console.log('unable to mongodb server');
    }
    db.collection('Todos').findOneAndUpdate({
        _id: new ObjectID('595403ffb078e02fa048a363')
    }, {
        $set: {
            text: 'the night is nearly over 2',
            completed: true,
        },
        $inc: {
            number: +1
        }
    }, {
        returnOriginal: false
    }).then((results)=>{
        console.log(results);
    })
});

