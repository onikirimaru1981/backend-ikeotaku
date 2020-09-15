const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const MangScoresSchema = new Schema({

    _id: Schema.Types.ObjectId,//o esta bien dicho objectId?
    user_id: USER(_id),
    manga_id: MANGA(_id),
    score: Number
});



module.exports = mongoose.model('MangSCore', MangScoresSchema);