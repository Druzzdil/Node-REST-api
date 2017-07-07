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
  // this = user object
  let access = 'auth';
  let token = jwt.sign({
    _id: this._id.toHexString(),
     access}, 'abc123').toString();
  this.tokens.push({access, token});
  return this.save().then(() => {
    return token;
  });
}

let User = mongoose.model('User', UserSchema);
module.exports = {User};
