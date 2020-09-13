require("dotenv").config();
const mongoose = require("mongoose");
// const jtw = require('jsonwebtoken');
const utils = require("../utils/index");
const User = require("../models/UsersModels");


mongoose.connect(process.env.SERVER, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
});

const usersController = {
  //Metodos
  getAllUsers: async function (req, res) {
    const usersList = await User.find((err, users) => {

      if (err) return res.status(500).send({ message: "Error al mostrar lista de usuarios" });
      return res.status(200).json({
        message: "Busqueda de usuarios realizada correctamente",
        users,
      });
    });
  },

  getUser: function (req, res) {
    const userId = req.params.userId
    User.findById(userId, (err, user) => {

      if (err) return res.status(500).send({ message: "Error al mostrar usaurio" });
      if (!user) return res.status(404).send({ message: "El usuario no existe" });
      return res.status(200).send({
        message: "Busqueda de usuario realizada correctamente",
        user: user

      });

    })
    // const searchUser = await User.findById(userId).populate("comments"); //tener en cuenta para despues
  },
  //Preguntar  a victor como hacer para que no me puedan crear el mismo usuario dos vecss
  //Preguntar como implementar la autentificacion,porque ni puta idea de como hacerlo
  createUser: async function (req, res) {
    const userInfo = req.body;
    const user = new User();

    user.user = userInfo.user;
    user.email = userInfo.email;
    user.age = userInfo.age;
    user.city = userInfo.city;
    user.favorites = [];
    user.comments = [];
    user.password = await utils.generatePassword(userInfo.password);


    user.save((err, userSave) => {
      if (err)
        return res.status(500).send({
          message: "Error al crear usuario,intentelo de nuevo.",
        });
      if (!userSave)
        return res.status(404).send({
          message: "No se ha podido guardar datos de usuario.",
        });

      return res.status(200).send({
        message: "Usuario creado y guardado correctamente",
        user: userSave,
      });
    });
  },

  updateUser: async function (req, res) {

    const userId = req.params.userId;
    const update = req.body;
    update.password = await utils.generatePassword(update.password)
    User.findByIdAndUpdate(userId, update, { new: true }, (err, userUpdate) => {

      if (err) return res.status(500).send({ message: "Error al actualizar" });

      if (!userUpdate) return res.status(404).send({ message: "No existe usuario para actualizar" });

      return res.status(200).send({
        message: "Usuario actualizado correctamente",
        user: userUpdate
      });
    });

  },


  deleteUser: async function (req, res) {
    const userId = req.params.userId;
    await User.findByIdAndDelete(userId, (err, userDelete) => {
      if (err)
        return res.status(500).send({
          message: "No se ha podido realizar la eliminacion del usuario",
        });
      if (!userDelete)
        return res.status(404).send({
          message: "No se ha podido eliminar el usuario,no existe o no se ha especificado correctamente ",
        });
      return res.status(200).send({
        message: "Usuario borrado correctamente",
        user: userDelete,

      });
    });
  },
};

module.exports = usersController;