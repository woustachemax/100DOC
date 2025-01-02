// //chequebook example
// //jwt-email-pd


// const jwt = require('jsonwebtoken');



// const value = {
//     name: "Siddharth",
//     accountNumber: 123123,
// }


// const token = jwt.sign(value, "secret");
// console.log(token);

const jwt = require('jsonwebtoken');


const mareez = {
    name: "Sid",
    illness: "adhd",
    age: 23,
}

const token = jwt.sign(mareez, "ciggaratte");
console.log(token);