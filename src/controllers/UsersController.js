const mongoose = require("mongoose");
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const utils = require("../utils/index");
const User = require("../models/UsersModel");




const usersControllers = {
  //Metodos
  getAllUsers: async function (req, res) {
    const usersList = await User.find((err, users) => {

      if (err) return res.status(500).send({ message: "Error al mostrar lista de usuarios" + err });
      return res.status(200).json({
        message: "Busqueda de usuarios realizada correctamente",
        users
      });
    });
  },

  getUser: function (req, res) {
    const userId = req.params.userId
    User.findById(userId, (err, user) => {

      if (err) return res.status(500).send({ message: "Error al mostrar usaurio" + err });
      if (!user) return res.status(400).send({ message: "El usuario no existe" });
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
    const checkIfAlreadyExists = await User.find({ email: userInfo.email });
    const sequence = await User.find().sort({ '_id': -1 }).limit(1)
    //sequence = busca todos los documentos, los ordena de mayor a menor y devuelve el 
    //primero de ellos. 

    if (sequence.length === 0) user._id = 1;
    else { user._id = parseInt(sequence[0]._id) + 1; };


    user.nickName = userInfo.nickName;
    user.email = userInfo.email;
    user.password = await utils.generatePassword(userInfo.password);
    user.gender = userInfo.gender
    user.birthday = userInfo.birthday;
    user.country = userInfo.country;
    user.province = userInfo.province;
    // user.favorites = [];
    // user.comments = [];
    // user.scores = [];

    //Validar como obligatorios, age,password,nickanem,email, 
    //Nickname existe
    //age sea un numero
    //email valido.
    //recodar contraseña-futuro


    if (checkIfAlreadyExists[0]) {
      res.status(400).json({
        message: "Correo electronico ya registrado."
      });
      return;
    }

    user.save((err, userSave) => {

      if (err)
        return res.status(500).send({
          message: "Error al crear usuario,intentelo de nuevo." + err,
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

      if (err) return res.status(500).send({ message: "Error al actualizar" + err });

      return res.status(200).send({
        message: "Usuario actualizado correctamente",
        user: userUpdate
      });
    });

  },

  login: async function (req, res) {

    const { email, password } = req.body;

    const storedUserInfo = await User.find({ email });
    if (!storedUserInfo[0]) {
      res.status(401).send('No estás autorizado. Email o contraseña incorrectos.');
    }

    const checkUserPassword = await bcrypt.compare(password, storedUserInfo[0].password);
    if (!checkUserPassword) {
      res.status(401).send('No estás autorizado. Email o contraseña incorrectos.');
    }

    const token = await jwt.sign({ storeUserInfo: storedUserInfo[0] }, process.env.ACCESS_TOKEN_SECRET, { expiresIn: '4h' });
    res.status(200).json({
      message: 'Login correcto',
      token
    });
  }

  //añadir en futuro metodo sofdelete
};

module.exports = usersControllers;