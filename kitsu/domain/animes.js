const axios = require('axios')
const Anime = require('../models/anime');

const saveDocuments = (data) => {

    for (anime_data of data) {

        const anime = Anime();
        anime._id = anime_data.id
        anime.titles = {
            en: anime_data.attributes.titles.en,
            en_jp: anime_data.attributes.titles.en_jp,
            ja_jp: anime_data.attributes.titles.ja_jp,
        }
        anime.favoritesCount = anime_data.attributes.favoritesCount;
        anime.ageRating = anime_data.attributes.ageRating;
        anime.ageRatingGuide = anime_data.attributes.ageRatingGuide;
        anime.subtype = anime_data.attributes.subtype;
        anime.status = anime_data.attributes.status;
        if (anime_data.attributes.posterImage) {
            anime.posterImage = {
                tiny: anime_data.attributes.posterImage.hasOwnProperty('tiny') ? anime_data.attributes.posterImage.tiny : '',
                medium: anime_data.attributes.posterImage.hasOwnProperty('medium') ? anime_data.attributes.posterImage.medium : ''
            }
        };
        anime.youtubeVideoId = anime_data.attributes.youtubeVideoId;
        anime.showType = anime_data.attributes.showType;
        anime.synopsis = anime_data.synopsis;
        anime.episodeCount = anime_data.synopsis;
        anime.episodeLength = anime_data.synopsis;

        try {
            anime.save((err, animeSave) => {
                if (err) console.log("Se ha producido un error: " + err);
            });
        } catch (e) {
            console.log(e)
        }


    }
}
const setData = async () => {


    let animes_data = await axios.get("https://kitsu.io/api/edge/anime");

    const numero_elementos = animes_data.data.meta.count;
    let link_next = animes_data.data.links.next;
    saveDocuments(animes_data.data.data);

    for (let i = 10; i < numero_elementos; i += 10) {

        animes_data = await axios.get(link_next);
        link_next = animes_data.data.links.next;

        saveDocuments(animes_data.data.data);

    }

}

const restartCollection = async () => {

    try {
        await Anime.deleteMany();
    } catch (e) {
        console.log(e);
    }
}


module.exports = {
    setData, restartCollection
}