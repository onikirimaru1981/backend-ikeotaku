const mongoose = require('mongoose')
const Score = require("../models/ScoresModels");

mongoose.connect(process.env.SERVER, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
});


//Preguntar a victor asuntod e puntuaciones,como relaciono una luntuacion a un anime,o un arrayd e puntuaciones a aun anime/manga
const scoresControllers = {
    //metodos

    addScore: function (req, res) {
        const score = new Score();
        const scoreInfo = req.body;

        score.score = scoreInfo.score;

        score.save((err, scoreSave) => {
            if (err)
                return res.status(500).send({
                    message: "Error al puntuar,intentelo de nuevo mas tarde.",
                });
            if (!scoreSave)
                return res.status(404).send({
                    message: "No se ha podido guardar la puntuacion en el anime/manga.",
                });
            return res.status(200).send({
                message: "Puntuacion efectuada  correctamente",
                score: scoreSave
            });

        });
    },

    updateScore: async function (req, res) {

        const scoreId = req.params.scoreId;
        const update = req.body;

        const dataToUpdate = {

        };

        Score.findByIdAndUpdate(scoreId, update, { new: true }, (err, scoreUpdate) => {

            if (err) return res.status(500).send({ message: "Error al actualizar" });

            if (!scoreUpdate) return res.status(404).send({ message: "No existe puntuacion para actualizar" });

            return res.status(200).send({
                message: "puntuacion actualizada correctamente",
                score: scoreUpdate
            });
        });

    },
    deleteScore: async function (req, res) {
        const scoreId = req.params.scoreId;

        await Score.findByIdAndDelete(scoreId, (err, scoreDelete) => {
            if (err)
                return res.status(500).send({
                    message: "No se ha podido realizar la eliminacion de la puntuacion",
                });
            if (!scoreDelete)
                return res.status(404).send({
                    message: "No se ha podido eliminar la puntuacion,no existe o no se ha especificado correctamente ",
                });
            return res.status(200).send({
                message: "Puntuacion borrada  correctamente",
                score: scoreDelete

            });
        });
    },
};





module.exports = scoresControllers;