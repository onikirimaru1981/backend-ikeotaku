const mongoose = require("mongoose");
const jwt = require('jsonwebtoken');
const Anime = require('../models/AnimesModel');

//Hacer lo mismo para mangas(modificar model,controler,y rouetes igual que el de animes)
const animesControllers = {

    getAllAnimes: async function (req, res) { },
    get: async (req, res) => {

        const id = req.params.animeId
        const anime = await Anime.find({ _id: id });

        return res.status(200).send(anime);

    },
    getAnimeComments: async function (req, res) { },
    getAnimeFavorites: async function (req, res) { },
    getAnimeScore: async function (req, res) { },
    createAnime: async function (req, res) { },
    deleteAnime: async function (req, res) { },
    updateAnime: async function (req, res) { },
};

module.exports = animesControllers;


