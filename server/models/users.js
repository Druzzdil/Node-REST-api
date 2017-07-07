const mongoose = require('mongoose');
const validator = require('validator');
mongoose.set('debug', true);
let User = mongoose.model('User', {
    email: {
        type: String,
        required: true,
        minlength :3,
        trim: true,
        unique: true,
        validate: {
          validator: validator.isEmail,
          message: '{VALUE} is not a valid email!'
        }
      },
      password: {
        type: String,
        minlength: 6,
        require: true,
      },
      tokens: [{
        access: {
          type: String,
          required: true
        },
        token: {
          type: String,
          required: true
        }
      }]
});
module.exports = {User};
