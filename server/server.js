// let mongoose = require('mongoose');
// mongoose.Promise = global.Promise;
// mongoose.connect('mongodb://localhost:27017/TodoApp');
let {mongoose} = require('./db/mongoose');
let {Todo} = require('./models/todo');
let {User} = require('./models/users');

const express = require('express');
// const port = process.env.PORT || 3000;
let app = express();
const bodyParser = require('body-parser');

// hbs.registerPartials(__dirname + '/views/partials');
// app.set('view engine', 'html');
// app.use('/assets/', express.static('assets'));
// app.use('/public/', express.static('public'));

app.use(function (req, res) {
    res.setHeader('Content-Type', 'text/plain');
    res.end(JSON.stringify(req.body, null, 2));
});
app.use(bodyParser.json());
app.post('/todos', (req, res)=>{
    console.log(res.body);
});

app.get('/', (req, res)=>{
    res.status(200).send("server is up and running");
});

// app.get('/users', (req, res)=>{
//     res.status(200).send({
//         age: 30,
//         name: 'dune'
//     });
// });

app.listen(3000, () => {
    console.log(`Server is up on port`);
});

