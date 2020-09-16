const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const FavoritesSchema = new Schema({

    _id: Schema.Types.ObjectId,//o esta bien dicho objectId?
    user_id: Number,
    manga_id: Number,

});



module.exports = mongoose.model('MangFavorite', FavoritesSchema);