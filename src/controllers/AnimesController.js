const mongoose = require("mongoose");
const jwt = require('jsonwebtoken');
const Anime = require('../models/AnimesModel');

//Hacer lo mismo para mangas(modificar model,controler,y routes igual que el de animes)
const animesControllers = {

    getAllAnimes: async function (req, res) {

        try {

            const limit = parseInt(req.query.limit);
            const page = parseInt(req.query.page) - 1;
            const skip = page * limit;
            const query_sort = req.query.sort;
            //favorites
            //score
            //title
            const query_type_sort = req.query.type_sort
            let sort = {}

            if (query_sort === 'favorites') sort = { favoritesCount: query_type_sort }
            if (query_sort === 'score') sort = { score: query_type_sort }

            const anime = await Anime.find({}).limit(6).skip(skip).sort(sort);

            if (anime.length === 0) res.status(404).send("Anime no encontrado");
            return res.status(200).send(anime);
        } catch (err) {
            return res.status(500).send("Se ha producido un error interno: " + err);
        }
    },
    get: async (req, res) => {

        try {
            const id = req.params.animeId
            const anime = await Anime.find({ _id: id });

            if (anime.length === 0) res.status(404).send("Anime no encontrado");
            return res.status(200).send(anime);
        } catch (err) {
            return res.status(500).send("Se ha producido un error interno: " + err);
        }

    },
    getAnimeComments: async function (req, res) { },
    getAnimeFavorites: async function (req, res) { },
    getAnimeScore: async function (req, res) { },
    createAnime: async function (req, res) { },
    deleteAnime: async function (req, res) { },
    updateAnime: async function (req, res) { },
};

module.exports = animesControllers;


