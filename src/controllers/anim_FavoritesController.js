const mongoose = require("mongoose");
const jwt = require('jsonwebtoken');
const AnimFavorite = require('../models/anim_FavoritesModel');


const animFavoriteControllers = {

    deleteFavoriteAnime: async (req, res) => {
        // TODO: Implementar metodo.
    },
    addFavoriteAnime: async function (req, res) {

        const AnimFavoriteInfo = req.body;
        const animFavorite = new AnimFavorite();

        animFavorite.user_id = req.params.userId
        animFavorite.anime_id = req.params.animeId

        AnimFavorite.findOneAndUpdate({ user_id: req.params.userId, anime_id: req.params.animeId },
            animScore,
            { upsert: true }, (err, scoreSave) => {
                console.log(scoreSave)
                if (err) {
                    console.log(err);
                    return res.status(500).send({
                        message: "Error al añadir puntuacion.." + err,
                    });
                }
                return res.status(200).send({
                    message: "Puntuacion añadida  correctamente",
                    data_saved: scoreSave
                });

            });



    },



};

module.exports = animScoresControllers;
