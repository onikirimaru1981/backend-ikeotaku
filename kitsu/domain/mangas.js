const axios = require('axios')
const Manga = require('../models/manga');

const saveDocuments = (data) => {

    for (manga_data of data) {

        const manga = Manga();
        manga._id = manga_data.id
        manga.titles = {
            en: manga_data.attributes.titles.en,
            en_jp: manga_data.attributes.titles.en_jp,
            ja_jp: manga_data.attributes.titles.ja_jp,
        }
        manga.synopsis = manga_data.attributes.synopsis;
        manga.favoritesCount = manga_data.attributes.favoritesCount;
        manga.ageRating = manga_data.attributes.ageRating;
        manga.ageRatingGuide = manga_data.attributes.ageRatingGuide;
        manga.status = manga_data.attributes.status;
        if (manga_data.attributes.posterImage) {
            manga.posterImage = {
                tiny: manga_data.attributes.posterImage.hasOwnProperty('tiny') ? manga_data.attributes.posterImage.tiny : '',
                medium: manga_data.attributes.posterImage.hasOwnProperty('medium') ? manga_data.attributes.posterImage.medium : ''
            }
        }
        manga.chapterCount = manga_data.attributes.chapterCount;
        manga.volumeCount = manga_data.attributes.volumeCount;
        manga.serialization = manga_data.attributes.serialization;
        manga.mangaType = manga_data.attributes.mangaType;

        try {
            manga.save((err, animeSave) => {
                if (err) console.log("Se ha producido un error: " + err);
            });
        } catch (e) {
            console.log(e)
        }


    }
}
const setData = async () => {


    let mangas_data = await axios.get("https://kitsu.io/api/edge/manga");

    const numero_elementos = mangas_data.data.meta.count;
    let link_next = mangas_data.data.links.next;
    saveDocuments(mangas_data.data.data);

    for (let i = 10; i < numero_elementos; i += 10) {

        mangas_data = await axios.get(link_next);
        link_next = mangas_data.data.links.next;

        saveDocuments(mangas_data.data.data);

    }

}

const restartCollection = async () => {

    try {
        await Manga.deleteMany();
    } catch (e) {
        console.log(e);
    }
}


module.exports = {
    setData, restartCollection
}