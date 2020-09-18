const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const MangasSchema = new Schema({


    _id: Number,
    titles: { en: String, en_jp: String },
    posterImage: {
        tiny: String,
        medium: String,
    },
    synopsis: String,
    favoritesCount: Number,
    ageRating: String,
    ageRatingGuide: String,
    status: String,
    chapterCount: Number,
    volumeCount: Number,
    serialization: String,
    mangaType: String,
    score: Number
});



module.exports = mongoose.model('Mangas', MangasSchema);