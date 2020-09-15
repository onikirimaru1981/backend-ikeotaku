const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const MangasSchema = new Schema({

    _id: Number,
    title: String,
    type: String,
    episodes: Number,
    status: String,
    score: Number
});



module.exports = mongoose.model('Mangas', MangasSchema);