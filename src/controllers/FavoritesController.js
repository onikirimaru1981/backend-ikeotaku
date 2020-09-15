const mongoose = require('mongoose')
const Favorite = require("../models/FavoritesModel");



const favoritesControllers = {
    //metodos

    getAllFavorites: async function (req, res) {

        const favoritesList = await Favorite.find((err, favorites) => {

            if (err) return res.status(500).send({ message: "Error al mostrar lista de favoritos" });
            return res.status(200).json({
                message: "Busqueda de favoritos realizada correctamente",
                favorites
            });
        });
    },



    addFavorite: function (req, res) {
        const favorite = new Favorite();
        const favoriteInfo = req.body;

        favorite.favorite = favoriteInfo.favorite;

        favorite.save((err, favoriteSave) => {
            if (err)
                return res.status(500).send({
                    message: "Error al añadir nuevo favorito,intentelo de nuevo mas tarde.",
                });
            if (!favoriteSave)
                return res.status(404).send({
                    message: "No se ha podido guardar el favorito en la lista.",
                });
            return res.status(200).send({
                message: "Favorito añadido a la lista correctamente",
                favorite: favoriteSave
            });

        });
    },

    updateFavorite: async function (req, res) {

        const favoriteId = req.params.favoriteId;
        const update = req.body;

        Favorite.findByIdAndUpdate(favoriteId, update, { new: true }, (err, favoriteUpdate) => {

            if (err) return res.status(500).send({ message: "Error al actualizar" });

            if (!favoriteUpdate) return res.status(404).send({ message: "No existe favorito para actualizar" });

            return res.status(200).send({
                message: " Lista de favoritos actualizados correctamente",
                favorite: favoriteUpdate
            });
        });

    },
    deleteFavorite: async function (req, res) {
        const favoriteId = req.params.favoriteId;

        await Favorite.findByIdAndDelete(favoriteId, (err, favoriteDelete) => {
            if (err)
                return res.status(500).send({
                    message: "No se ha podido realizar la eliminacion del favorito",
                });
            if (!favoriteDelete)
                return res.status(404).send({
                    message: "No se ha podido eliminar el favorito,no existe o no se ha especificado correctamente ",
                });
            return res.status(200).send({
                message: "Favorito borrado correctamente",
                user: favoriteDelete

            });
        });
    },
};




module.exports = favoritesControllers