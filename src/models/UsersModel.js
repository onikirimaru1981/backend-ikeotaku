const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = new Schema({
    _id: Number,
    nickName: { type: String, required: true },
    email: { type: String, required: true },
    password: { type: String, required: true },
    gender: { type: String, required: true },
    birthday: { type: Date, required: true },
    country: { type: String, required: true },
    province: { type: String, required: true },
});

module.exports = mongoose.model('User', UserSchema);