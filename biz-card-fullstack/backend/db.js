const mongoose = require("mongoose");
mongoose.connect('mongodb+srv://sidt:123456789S@cluster0.sa65t.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0');

const cardSchema = mongoose.Schema({
    name: String,
    description: String,
    interests: Array,
    socialLinks: Object,
})

const card = mongoose.model('card',cardSchema );

module.exports = {
    card
}