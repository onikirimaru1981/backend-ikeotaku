//require modules
require("dotenv").config();
const express = require("express");
const cors = require("cors");
const mongoose = require('mongoose')
const usersRoutes = require("./src/routes/UsersRoutes");
const commenstRoutes = require("./src/routes/CommentsRoutes");
const favoritesRoutes = require("./src/routes/FavoritesRoutes");
const animesRoutes = require("./src/routes/AnimesRoutes");
const mangasRoutes = require("./src/routes/MangasRoutes");
const anim_ScoresRoutes = require("./src/routes/MangasRoutes");
const mang_ScoresRoutes = require("./src/routes/MangasRoutes");



//Connect DDBB

mongoose.connect(process.env.SERVER, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
});


//create app
const app = express();

//Middlewares

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({
  extended: true
}));

//Routes
app.use("/api/users", usersRoutes);
app.use("/api/comments", commenstRoutes);
app.use("/api/favorites", favoritesRoutes);
app.use("/api/anime", animesRoutes);
app.use("/api/mangas", mangasRoutes);
app.use("/api/animes", anim_ScoresRoutes);
app.use("/api/mang_Scores", mang_ScoresRoutes);
// app.get('/', (req, res) => {
//     res.status(200).send('<h1>Bienvenido a ikeotaku</h1>');
// });

//execute app listening on port
app.listen(process.env.PORT, () =>
  console.log("todo guai por aqui en el puerto  ", process.env.PORT)
);