const usersModels = require("../models/usersModels");
const {
    query
} = require("express");
const isProduction = process.env.PRODUCTION === 'true' ? true : false;


module.exports = {
    getAllUsuarios: async function (req, res) {


        //obtener usuarios
        if (isProduction) {
            res.status(200).json({
                message: 'Listado de todos los usuarios'
            });
            return;
        }

        const usersList = await usersModels.getAllUsuarios();

        res.json(usersList);
    },

    getUsuario: async function (req, res) {
        //obtener un usuario
        if (isProduction) {
            res.status(200).json({
                message: 'Dato de un usuario'
            });
            return;
        };
        const userId = req.params.id;
        const queryResult = await usersModels.getUsuario(userId)

        res.status(200).json(queryResult[0]);
    },

    addUser: async function (req, res) {
        //añadir usuario
        if (isProduction) {
            res.status(200).json({
                message: 'Usuario añadido'
            });
            return;
        };

        const usuario = req.body;
        const queryResult = await usersModels.addUser(usuario);

        res.status(200).json({
            message: 'Usuario añadido correctamente,yepaaaa!',
            userId: queryResult.insertId
        });
    },

    updateUser: async function (req, res) {
        //actualizar usuario
        if (isProduction) {
            res.status(200).json({
                message: 'Usuario actualizado'
            });
            return;
        };
        const usuario = req.body;
        const userId = req.params.id;
        const queryResult = await usersModels.updateUser(userId, usuario);

        res.status(200).json({
            message: 'Usuario actualizado correctamente,tururu!',
            userId: queryResult.insertId
        });
    },

    deleteUser: async function (req, res) {
        //borrar usuario
        if (isProduction) {
            res.status(200).json({
                message: 'Usuario borrado'
            });
            return;
        };

        const userId = req.params.id;
        const queryResult = await usersModels.deleteUser(userId);

        res.status(200).json({
            message: 'Usuario borrado,ups!',

        });
    },
};