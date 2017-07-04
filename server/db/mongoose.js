var mongoose = require('mongoose');
mongoose.Promise = global.Promise;
//mongoose.connect( process.env.MONGODB_URI );
module.exports = { mongoose };


let db = {
  localhost: 'mongodb://localhost:27017/TodoApp',
  mlab: 'mongodb://SentientBreath:lorien117@ds147052.mlab.com:47052/todos'
};
mongoose.connect(db.mlab || db.localhost);
