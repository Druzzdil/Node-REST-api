const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {ObjectID} = require('mongodb');


let id = '5957f45e4d28cf04f83747f0';
// Todo.find({
//   _id: id
// }).then((todos)=>{
//   console.log(todos);
// })

// let valid = ObjectID.isValid(id);
// if (valid) {
//   console.log('ok');
// }
let id = req.params.id;
let valid = ObjectID.isValid(id);
if (valid) {
  console.log('valid');
  res.send(req.params);
}
Todo.findById(id).then((todo) => {
  console.log(todo, 'todos pppp');
}),((err)=>{
  console.log('unable to insert todo', err);
});
