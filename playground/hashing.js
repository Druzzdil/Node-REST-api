const jwt = require('jsonwebtoken');
var bcrypt = require('bcryptjs');

let password = 'abc123';
// bcrypt.genSalt(10, function(err, salt) {
//     bcrypt.hash(password, salt, function(err, hash) {
//         console.log(hash, 'this is it');
//     });
// });

let hashedPassword = '$2a$10$y.lLOp/mReezxQN4iOf83OTGeDEukYpgenOZg3fUJeabT/7A5cSZ6';
bcrypt.compare(password, hashedPassword, (err,res)=>{
  console.log(res, 'finall');
});

//generujemy token dla uzytkownia po _id
// odbywa sie to w modelu uzytkownia -- users.js
// user.tokens.push({access, token})
//  return
// })














// let message = 'im user number 1';
// let test = SHA256(message).toString();


// let data = {
//   id: 4
// }
// let token = {
//   data,
//   hash: SHA256(JSON.stringify(data) + 'something').toString()
// }
//
// let hashTest = SHA256(JSON.stringify(token.data) + 'something').toString();
// if(hashTest === token.hash){
//   console.log('data wasnt change');
// } else {
//   console.log('smth went wrong dont belive it dude');
// }
