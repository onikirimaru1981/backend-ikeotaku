const mongoose = require("mongoose");
const jwt = require('jsonwebtoken');
const Anime = require('../models/AnimesModel');


const animesControllers = {

    getAllAnimes: async function (req, res) { },
    getAnime: async function (req, res) { },
    getAnimeComments: async function (req, res) { },
    getAnimeFavorites: async function (req, res) { },
    getAnimeScore: async function (req, res) { },
    createAnime: async function (req, res) { },
    deleteAnime: async function (req, res) { },
    updateAnime: async function (req, res) { },
};

module.exports = animesControllers;


