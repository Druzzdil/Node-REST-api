let mongoose = require('mongoose');
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/TodoApp');



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

let newTodo = new Todo({text: '    pies'});


newTodo.save().then((doc)=>{
    console.log(' save todo', JSON.stringify(doc, undefined, 2));
}, (err)=>{
    console.log('unable to save todo', err);
});

let validateEmail = function(email) {
    let re = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    return re.test(email);
};

function reg(email){
    let ara = ['end is night'];
    let res = email.test(ara);
    console.log(res, 'tested regex');
}


let User = mongoose.model('User', {
    email: {
        type: String,
        required: true,
        minlength :3,
        trim: true,
        unique: true,
        validate: [validateEmail, 'Please fill a valid email address'],
        match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'Please fill a valid email address']
    }
});

let newUser = new User({
   email: '  staniszewski8.apd  ',
});



newUser.save().then((docs)=>{
    console.log(JSON.stringify(docs, undefined, 2))
}, (err)=>{
    console.log('unable to save email address', err)
});





