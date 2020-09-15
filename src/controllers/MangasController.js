const mongoose = require("mongoose");
const jwt = require('jsonwebtoken');
const Manga = require('../models/MangasModel');


const mangasControllers = {

    getAllMangas: async function (req, res) { },
    getManga: async function (req, res) { },
    getMangaComments: async function (req, res) { },
    getMangaFavorites: async function (req, res) { },
    getMangaScore: async function (req, res) { },
    createManga: async function (req, res) { },
    deleteManga: async function (req, res) { },
    updateManga: async function (req, res) { },
};

module.exports = mangasControllers;