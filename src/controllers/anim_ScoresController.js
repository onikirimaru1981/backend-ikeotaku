const mongoose = require("mongoose");
const jwt = require('jsonwebtoken');
const AnimScore = require('../models/anim_ScoresModel');


const animScoresControllers = {

    addScoreAnime: async function (req, res) {

        const scoreAnimInfo = req.body;
        const animScore = new AnimScore();


        animScore.score = scoreAnimInfo.score;
        animScore.user_id = req.params.userId
        animScore.anime_id = req.params.animeId

        AnimScore.findOneAndUpdate({ user_id: req.params.userId, anime_id: req.params.animeId },
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
