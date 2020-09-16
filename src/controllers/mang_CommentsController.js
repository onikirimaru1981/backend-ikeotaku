const mongoose = require("mongoose");
const jwt = require('jsonwebtoken');
const MangComment = require('../models/mang_CommentModel');


const mangCommentControllers = {

    addCommentMang: async function (req, res) {

        const commentMangInfo = req.body;
        const mangComment = new MangComment();


        mangComment.score = commentMangInfo.score;
        mangComment.user_id = req.params.userId
        mangComment.anime_id = req.params.animeId

        MangComment.findOneAndUpdate({ user_id: req.params.userId, anime_id: req.params.animeId },
            mangComment,
            { upsert: true }, (err, commentSave) => {

                if (err) {

                    return res.status(500).send({
                        message: "Error al añadir comentario..",
                    });
                }
                return res.status(200).send({
                    message: "Comentario añadida  correctamente",
                    data_saved: commentSave
                });

            });



    },



};

module.exports = mangCommentControllers;
