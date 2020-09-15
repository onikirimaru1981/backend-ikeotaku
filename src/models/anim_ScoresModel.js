const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const AnimScoresSchema = new Schema({

    _id: Schema.Types.ObjectId,
    user_id: Number,         //USER(_id),
    anime_id: Number,   // ANIMES(_id),
    score: Number
});



module.exports = mongoose.model('AnimSCore', AnimScoresSchema);
