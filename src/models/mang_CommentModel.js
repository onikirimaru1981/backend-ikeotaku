const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const MangCommentsSchema = new Schema({

    _id: Schema.Types.ObjectId,//o esta bien dicho objectId?
    user_id: Number,
    manga_id: Number,
    comment: String

});



module.exports = mongoose.model('MangComment', MangCommentsSchema);