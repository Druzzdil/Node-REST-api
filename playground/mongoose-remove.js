const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/users');
const {ObjectID} = require('mongodb');


Todo.findByIdAndRemove('595a6f40cddeabc508f59d3a').then((result) => {
  console.log(result, 'removed by id');
});
