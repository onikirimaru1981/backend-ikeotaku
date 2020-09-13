require("dotenv").config();
const mongoose = require('mongoose')
const Comment = require("../models/CommentsModel");


mongoose.connect(process.env.SERVER, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
});

const commentsController = {
    //metodos

    createComment: function (req, res) {
        const comment = new Comment();



    }


};




module.exports = commentsController;