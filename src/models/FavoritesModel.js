const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const FavoritesSchema = new Schema({
    // _id: Schema.Types.ObjectId,//o esta bien dicho objectId?
    favorite: String
});

module.exports = mongoose.model('Favorites', FavoritesSchema);