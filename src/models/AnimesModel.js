const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const AnimesSchema = new Schema({

    _id: Number,
    titles: { en: String, en_jp: String, ja_jp: String },
    synopsis: String,
    episodeCount: Number,
    episodeLength: Number,
    favoritesCount: Number,
    ageRating: String,
    ageRatingGuide: String,
    subtype: String,
    status: String,
    posterImage: {
        tiny: String,
        medium: String,
    },
    youtubeVideoId: String,
    showType: String,
    score: Number,
});



module.exports = mongoose.model('Anime', AnimesSchema);