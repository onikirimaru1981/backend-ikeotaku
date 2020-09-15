const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const CommentsSchema = new Schema({
    //preguntra si a comentarios tambien le asigno un id
    // _id: Schema.Types.ObjectId,//o esta bien dicho objectId?
    comment: String
});



module.exports = mongoose.model('Comments', CommentsSchema);