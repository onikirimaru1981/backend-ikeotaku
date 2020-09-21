const mongoose = require("mongoose");
const jwt = require('jsonwebtoken');
const Manga = require('../models/MangasModel');


const mangasControllers = {

    getAllMangas: async function (req, res) {
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

            const manga = await Manga.find({}).limit(12).skip(skip).sort(sort);

            if (manga.length === 0) res.status(404).send("Manga no encontrado");
            return res.status(200).send(manga);
        } catch (e) {
            return res.status(500).send("Se ha producido un error interno: " + e);
        }
    },
    getManga: async function (req, res) {
        try {
            const id = req.params.mangaId

            const manga = await Manga.find({ _id: id });

            if (manga.length === 0) res.status(404).send("Manga no encontrado");
            return res.status(200).send(manga);
        } catch (err) {
            return res.status(500).send("Se ha producido un error interno: " + err);
        }
    },
    getMangaComments: async function (req, res) { },
    getMangaFavorites: async function (req, res) { },
    getMangaScore: async function (req, res) { },
    createManga: async function (req, res) { },
    deleteManga: async function (req, res) { },
    updateManga: async function (req, res) { },
};

module.exports = mangasControllers;