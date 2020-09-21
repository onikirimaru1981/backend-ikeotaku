const mongoose = require("mongoose");
const jwt = require('jsonwebtoken');
const AnimComment = require('../models/anim_CommentModel');


const animCommentsControllers = {

    addCommentAnime: async (req, res) => {

        const AnimInfo = req.body;
        const animComment = new AnimComment();

        animComment.comment = AnimInfo.comment;
        animComment.user_id = req.params.userId
        animComment.anime_id = req.params.animeId

        AnimCommente.findOneAndUpdate({ user_id: req.params.userId, anime_id: req.params.animeId },
            animComment,
            { upsert: true }, (err, CommentSave) => {

                if (err) {

                    return res.status(500).send({
                        message: "Error al añadir comentario.." + err,
                    });
                }
                return res.status(200).send({
                    message: "Comentario añadida  correctamente",
                    data_saved: commentSave
                });

            });



    },



};

module.exports = AnimCommentsControllers;
