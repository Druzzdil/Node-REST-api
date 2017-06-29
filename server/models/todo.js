let mongoose = require('mongoose');
// mongoose.Promise = global.Promise;
// mongoose.connect('mongodb://localhost:27017/TodoApp');

let  Todo = mongoose.model('Todo', {
    text: {
        type: String,
        required: true,
        minlength : 1,
        trim: true
    },
    completed: {
        type: Boolean,
        default: false
    },
    completedAt: {
        type: Number,
        default: null
    }
});

// let newTodo = new Todo({text: '    pies'});
//
//
// newTodo.save().then((doc)=>{
//     console.log(' save todo', JSON.stringify(doc, undefined, 2));
// }, (err)=>{
//     console.log('unable to save todo', err);
// });

module.export = {Todo};