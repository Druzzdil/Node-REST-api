let mongoose = require('mongoose');
let validateEmail = function(email) {
    let re = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    return re.test(email);
};

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
    email: 'staniszewski86@gmail.com',
});

newUser.save().then((docs)=>{
    console.log(JSON.stringify(docs, undefined, 2))
}, (err)=>{
    console.log('unable to save email address', err)
});

module.exports = {User};
