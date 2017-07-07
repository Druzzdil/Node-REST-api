const mongoose = require('mongoose');

let env = process.env.NODE_ENV || 'development';

console.log('env *****', env);

  if( env === 'development'){
    process.env.PORT = 3000;
    process.env.MONGODB_URI = 'mongodb://localhost:27017/TodoApp';
  } else if ( env === 'production'){
    process.env.MONGODB_URI = 'mongodb://igor:lorien117@ds147052.mlab.com:47052/todos';
  };


const express = require('express');
mongoose.Promise = global.Promise;
mongoose.connect( process.env.MONGODB_URI );
let {Todo} = require('./models/todo');
let {User} = require('./models/users');
const {ObjectID} = require('mongodb');
const _ = require('lodash');
const port = process.env.PORT || 3000;
// const port = process.env.PORT || 3000;
let app = express();
const bodyParser = require('body-parser');

app.use(bodyParser.json());
app.post('/todos', (req, res)=>{
    let todo = new Todo({
        text: req.body.text
    });
    todo.save().then((doc)=>{
        res.send(doc)
    },(error)=>{
        res.status(400).send(error, 'unable to save')
    });
});

app.get('/todos', function(req,res){
    Todo.find().then((todos) => {
      res.send(todos);
    }, (error)=>{
      console.log(' an error occured', error);
    });
});

app.get('/todos/:id', (req,res)=>{
  let id = req.params.id;
  if (!ObjectID.isValid(id)) {
      return res.status(404).send();
  };
  Todo.findById(id).then((todo) => {
      if (!todo) {
        res.status(404).send('dupa nie ma nic');
      }
    res.status(200).send({todo})
  }).catch((err) => {
    res.status(404).send('dupa nie ma nic');
    console.log(err, 'dupa nie ma nic');
  });
});

app.delete('/todos/:id', (req, res)=>{
    let id = req.params.id;
    if (!ObjectID.isValid(id)) {
        return res.status(404).send();
    };
    Todo.findByIdAndRemove(id).then((result) => {
      if (!result) {
        res.status(404).send('nie ma nic')
      }
      res.status(200).send(result);
      // res.redirect('/');
    }).catch((err) => {
      console.log(err);
    });
});

app.patch('/todos/:id', (req, res) => {
  let id = req.params.id;
  let body = _.pick(req.body, ['text', 'completed']);
  if (!ObjectID.isValid(id)) {
    return res.status(404).send();
  }
  if (_.isBoolean(body.completed) && body.completed) {
    body.completedAt = new Date().getTime();
  } else {
    body.completed = false;
    body.completedAt = null;
  }
  Todo.findByIdAndUpdate(id, {$set: body}, {new: true}).then((todo) => {
    if (!todo) {
      return res.status(404).send();
    }
    res.send({todo});
  }).catch((e) => {
    res.status(400).send();
  });
});

app.post('/users', (req, res)=>{
  let body = _.pick(req.body, ['email', 'password']);
  let user = new User(body);
  user.save().then((user) => {
    return user.generateAuthToken();
  }).then((token) => {
    res.header('x-auth', token).send(user);
  }).catch((err) => {
    res.status(400).send(err);
  });
});

app.listen(port, () => {
    console.log(`Server is up on port ${port}`);
});

module.exports = {app};
