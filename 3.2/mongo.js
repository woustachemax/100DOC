const { urlencoded } = require('body-parser');
const mongoose= require('mongoose');

mongoose.connect('mongodb+srv://sidt:40s7FO1XXRgJmR1e@cluster1.8kjgg.mongodb.net/');

const costumer = mongoose.model('customers' ,{name: String, username: String, password: String});

const user = new costumer({
    name: 'sid',
    username: 'sid2@gmail.com',
    password: '2233',
})

user.save();
