// let mongoose = require('mongoose');
// mongoose.Promise = global.Promise;
// mongoose.connect('mongodb://localhost:27017/TodoApp');

const express = require('express');
let {mongoose} = require('./db/mongoose');
let {Todo} = require('./models/todo');
let {User} = require('./models/users');

// const port = process.env.PORT || 3000;
let app = express();
const bodyParser = require('body-parser');

// hbs.registerPartials(__dirname + '/views/partials');
// app.set('view engine', 'html');
// app.use('/assets/', express.static('assets'));
// app.use('/public/', express.static('public'));

app.use(bodyParser.json());

app.post('/todos', (req, res)=>{
    let todo = new Todo({
        text: req.body.text
    });
    todo.save().then((doc)=>{
        res.send(doc)
    },(error)=>{
        res.status(400).send(error, 'unable to save')
    })
});

app.listen(3000, () => {
    console.log(`Server is up on port 3000`);
});

