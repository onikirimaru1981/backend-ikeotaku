const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const MangScoresSchema = new Schema({

    _id: Schema.Types.ObjectId,//o esta bien dicho objectId?
    user_id: Number,
    manga_id: Number,
    score: Number
});



module.exports = mongoose.model('MangSCore', MangScoresSchema);