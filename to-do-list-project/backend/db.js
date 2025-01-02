const mongoose = require("mongoose");

mongoose.connect("mongodb+srv://sidt:Siddharth12345@cluster0.8kjgg.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0");

const todoSchema = mongoose.Schema({
    title: String,
    description: String,
    completed: Boolean,

})

const todo = mongoose.model('todo', todoSchema);

module.exports = {
    todo
}