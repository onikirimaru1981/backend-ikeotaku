const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ScoreSchema = new Schema({
    // user: {
    //     type: Schema.Types.ObjectId,
    //     ref: 'User'
    // },
    score: Number
});

module.exports = mongoose.model('Score', ScoreSchema);