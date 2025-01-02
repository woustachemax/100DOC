const mongoose = require("mongoose");
mongoose.connect ("mongodb+srv://woustachemax:SuniyaSuniyaRaata@cluster0.sa65t.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0")

const todoSchema = mongoose.Schema({
    title: String,
    description: String,
    Completed: Boolean,
})

const todo = mongoose.model('todos', todoSchema);

module.exports = {
    todo
}


