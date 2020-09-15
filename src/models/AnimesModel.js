const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const AnimesSchema = new Schema({

    _id: Number,
    title: String,
    type: String,
    episodes: Number,//consultar que datos tendra mi model de mangas en funcion al json que tengo
    status: String,
    score: Number
});



module.exports = mongoose.model('Animes', AnimesSchema);