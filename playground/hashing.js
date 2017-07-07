const {SHA256} = require('crypto-js');
const jwt = require('jsonwebtoken');


let data = {
  id: 10
}

let token = jwt.sign(data, 'secret').toString();
console.log(token, ' this is token --------------------');
// let token = jwt.sign(data, 'abc');
// console.log(token);
// jwt.verify



//generujemy token dla uzytkownia po _id














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
