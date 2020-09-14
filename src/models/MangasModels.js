
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const CommentSchema = new Schema({
    // user: {
    //     type: Schema.Types.ObjectId,
    //     ref: 'User'
    // },
    mangas: String
});

//tener en cuenta
// const ScoreSchema = new Schema({
//     user: {
//         type: Schema.Types.ObjectId,
//         ref: 'User'
//     },
//     rate: Number
// });

module.exports = mongoose.model('Comment', CommentSchema);