require("dotenv").config();
const mongoose = require('mongoose')
const Comment = require("../models/CommentsModels");


mongoose.connect(process.env.SERVER, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
});

const commentsController = {
    //metodos

    getAllComments: async function (req, res) {

        const commentsList = await Comment.find((err, comments) => {

            if (err) return res.status(500).send({ message: "Error al mostrar lista de comentarios" });
            return res.status(200).json({
                message: "Busqueda de comentarios realizada correctamente",
                comments
            });
        });
    },

    getComment: function (req, res) {
        const commentId = req.params.commentId
        Comment.findById(commentId, (err, comment) => {

            if (err) return res.status(500).send({ message: "Error al mostrar comentario" });
            if (!comment) return res.status(404).send({ message: "El comentario solicitado no existe" });
            return res.status(200).send({
                message: "Busqueda de comentario realizada correctamente",
                comment: comment

            });

        })
        // const searchUser = await User.findById(userId).populate("comments"); //tener en cuenta para despues
    },

    createComment: function (req, res) {
        const comment = new Comment();
        const commentInfo = req.body;

        comment.comment = commentInfo.comment;

        comment.save((err, commentSave) => {
            if (err)
                return res.status(500).send({
                    message: "Error al crear nuevo comentario,intentelo de nuevo mas tarde.",
                });
            if (!commentSave)
                return res.status(404).send({
                    message: "No se ha podido guardar el comentario.",
                });
            return res.status(200).send({
                message: "Comentario creado y guardado correctamente",
                comment: commentSave
            });

        });
    },

    updatecomment: async function (req, res) {

        const commentId = req.params.commentId;
        const update = req.body;

        Comment.findByIdAndUpdate(commentId, update, { new: true }, (err, commentUpdate) => {

            if (err) return res.status(500).send({ message: "Error al actualizar" });

            if (!commentUpdate) return res.status(404).send({ message: "No existe comentario para actualizar" });

            return res.status(200).send({
                message: "Comentario actualizado correctamente",
                comment: commentUpdate
            });
        });

    },
    deleteComment: async function (req, res) {
        const commentId = req.params.commentId;

        await Comment.findByIdAndDelete(commentId, (err, commentDelete) => {
            if (err)
                return res.status(500).send({
                    message: "No se ha podido realizar la eliminacion del comentario",
                });
            if (!commentDelete)
                return res.status(404).send({
                    message: "No se ha podido eliminar el comentario,no existe o no se ha especificado correctamente ",
                });
            return res.status(200).send({
                message: "Comentario borrado correctamente",
                comment: commentDelete

            });
        });
    },

};


module.exports = commentsController;