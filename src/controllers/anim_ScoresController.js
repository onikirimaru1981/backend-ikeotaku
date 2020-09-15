const mongoose = require("mongoose");
const jwt = require('jsonwebtoken');
const AnimScore = require('../models/anim_ScoresModel');


const animScoresControllers = {

    addScoreAnime: async function (req, res) {

        const scoreAnimInfo = req.body;
        const animScore = new AnimScore();
        console.log("scoreAnimInfo", scoreAnimInfo)



        animScore.score = scoreAnimInfo.score;
        animScore.user_id = req.params.user_id
        animScore.anime_id = req.params.anime_id

        score.save((err, scoreSave) => {
            if (err)
                return res.status(500).send({
                    message: "Error al añadir puntuacion..",
                });
            return res.status(200).send({
                message: "Puntuacion añadida  correctamente",
                score: scoreSave
            });


        })


    },



};

module.exports = animScoresControllers;
