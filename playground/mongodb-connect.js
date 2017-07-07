
const {MongoClient, ObjectID} = require('mongodb');
const mongoose = require('mongoose');
const express = require('express');
mongoose.Promise = global.Promise;
MongoClient.connect('mongodb://igor:lorien117@ds147052.mlab.com:47052/todos', (err, db )=>{
    if(err){
       return console.log('unable to log into mongodb server');
    }
    console.log('connected to mongodb');
    db.collection('todos').insertOne({
        text: 'the night is beautifull'
    }).then(function(result) {
        console.log('inserted', result);
    });
    db.close();
});
