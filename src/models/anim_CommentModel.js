const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const AnimCommentsSchema = new Schema({

    _id: Schema.Types.ObjectId,
    user_id: Number,         //USER(_id),
    anime_id: Number,   // ANIMES(_id),
    comment: String
});



module.exports = mongoose.model('AnimComment', AnimCommentsSchema);
