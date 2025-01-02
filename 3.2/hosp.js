const jwt = require('jsonwebtoken');


const mareez = {
    name: "Sid",
    illness: "adhd",
    age: 23,
}

const token = jwt.sign(mareez, "secret");
console.log(token);