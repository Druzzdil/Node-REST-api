const mongoose = require('mongoose');
const validator = require('validator');
const jwt = require('jsonwebtoken');
const _ = require('lodash');
mongoose.set('debug', true);

let UserSchema = new mongoose.Schema({
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

UserSchema.methods.generateAuthToken = function(){
  let user = this;
  let access = 'auth';
  let token = jwt.sign({
    _id: user._id.toHexString(),
     access}, 'abc123').toString();
  user.tokens.push({access, token});
  return user.save().then(() => {
    return token;
  });
}

let User = mongoose.model('User', UserSchema);
module.exports = {User};
