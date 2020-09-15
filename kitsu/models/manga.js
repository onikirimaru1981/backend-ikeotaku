const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const MangaSchema = new Schema({

    _id: Number,
    titles: { en: String, en_jp: String, ja_jp: String },
    synopsis: String,
    favoritesCount: Number,
    ageRating: String,
    ageRatingGuide: String,
    status: String,
    posterImage: {
        tiny: {type: String, required: false},
        medium: String,
    },
    chapterCount: Number,
    volumeCount: Number,
    serialization: String,
    mangaType: String,
    score: Number,
});



module.exports = mongoose.model('Mangas', MangaSchema);