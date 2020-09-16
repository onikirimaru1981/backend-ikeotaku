const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const animFavoriteSchema = new Schema({

    _id: Schema.Types.ObjectId,
    user_id: Number,         //USER(_id),
    anime_id: Number,   // ANIMES(_id),

});



module.exports = mongoose.model('AnimFavorite', animFavoriteSchema);
