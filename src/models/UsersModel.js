const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = new Schema({
    _id: Number,
    user: String,
    email: String,
    password: String,
    age: Number,
    city: String,
    favorites: Array,
    comments: Array,
    scores: Array


});

module.exports = mongoose.model('User', UserSchema);