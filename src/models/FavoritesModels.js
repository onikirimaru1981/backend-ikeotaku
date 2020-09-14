const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const FavoriteSchema = new Schema({
    // user: {
    //     type: Schema.Types.ObjectId,
    //     ref: 'User'
    // },
    favorite: String
});

module.exports = mongoose.model('Favorite', FavoriteSchema);