const mongoose = require("mongoose");
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const utils = require("../utils/index");
const User = require("../models/UsersModel");




const usersControllers = {
  //Metodos
  getAllUsers: async function (req, res) {
    const usersList = await User.find((err, users) => {

      if (err) return res.status(500).send({ message: "Error al mostrar lista de usuarios" });
      return res.status(200).json({
        message: "Busqueda de usuarios realizada correctamente",
        users
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

  createUser: async function (req, res) {
    const userInfo = req.body;
    const user = new User();
    const checkIfAlreadyExists = await User.find({ user: userInfo.user });
    const sequence = await User.find().sort({ '_id': -1 }).limit(1)
    //sequence = busca todos los documentos, los ordena de mayor a menor y devuelve el 
    //primero de ellos. 

    if (sequence.length === 0) user._id = 1;
    else { user._id = parseInt(sequence[0]._id) + 1; };


    user.user = userInfo.user;
    user.email = userInfo.email;
    user.password = await utils.generatePassword(userInfo.password);
    user.age = userInfo.age;
    user.city = userInfo.city;
    user.favorites = [];
    user.comments = [];
    user.scores = [];



    if (checkIfAlreadyExists[0]) {
      res.status(500).json({
        message: "Nombre de usuario no disponible."
      });
      return;
    }

    user.save((err, userSave) => {

      if (err)
        return res.status(500).send({
          message: "Error al crear usuario,intentelo de nuevo.",
        });
      return res.status(200).send({
        message: "Usuario creado y guardado correctamente",
        user: userSave
      });

    });
  },

  updateUser: async function (req, res) {

    const userId = req.params.userId;
    const update = req.body;
    update.password = await utils.generatePassword(update.password)
    User.findByIdAndUpdate(userId, update, { new: true }, (err, userUpdate) => {

      if (err) return res.status(500).send({ message: "Error al actualizar" });

      return res.status(200).send({
        message: "Usuario actualizado correctamente",
        user: userUpdate
      });
    });

  },



  login: async function (req, res) {


    const { user, password } = req.body;

    const storedUserInfo = await User.find({ user });
    if (!storedUserInfo[0]) {
      res.status(401).send('No estás autorizado. Usuario o contraseñà incorrectos.');
    }

    const checkUserPassword = await bcrypt.compare(password, storedUserInfo[0].password);
    if (!checkUserPassword) {
      res.status(401).send('No estás autorizado. Usuario o contraseñà incorrectos.');
    }

    const token = await jwt.sign({ user: storedUserInfo[0].user }, process.env.ACCESS_TOKEN_SECRET, { expiresIn: '1h' });
    res.status(200).json({
      message: 'Login correcto',
      token
    });
  }

  //añadir en futurro metodo sofdelete
};

module.exports = usersControllers;