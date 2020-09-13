const mongoose = require('mongoose')
const User = require("../models/UsersModels");

mongoose.connect('mongodb://localhost:27017/adminUsers', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false
});

const favoriteController = {}




module.exports = favoriteController;