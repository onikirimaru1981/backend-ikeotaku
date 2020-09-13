const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = new Schema({
    users: String,
    email: String,
    password: String,
    age: Number,
    city: String,
    favorites: [{
        type: Schema.Types.ObjectId,
        ref: 'Favorites'
    }],
    // comment: Array,
    // comments: [{
    //     type: Schema.Types.ObjectId,
    //     ref: 'Comment'
    // }],
    score: [{
        type: Schema.Types.ObjectId,
        ref: 'Score'
    }]

});

module.exports = mongoose.model('User', UserSchema);