//require modules
require("dotenv").config();
const express = require("express");
const usersRoutes = require("./src/routes/UsersRoutes");
const commenstRoutes = require("./src/routes/CommentsRoutes");
const favoritesRoutes = require("./src/routes/FavoritesRoutes");
const scoresRoutes = require("./src/routes/ScoresRoutes");
const animesRoutes = require("./src/routes/AnimesRotes");
const mangasRoutes = require("./src/routes/MangasRoutes");
const cors = require("cors");


//create app
const app = express();

//Middlewares

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({
  extended: true
}));

//Routes
app.use("/user", usersRoutes);
app.use("/comment", commenstRoutes);
app.use("/favorite", favoritesRoutes);
app.use("/score", scoresRoutes);
app.use("/animes", animesRoutes);
app.use("/mangas", mangasRoutes);
// app.get('/', (req, res) => {
//     res.status(200).send('<h1>Bienvenido a ikeotaku</h1>');
// });

//execute app listening on port
app.listen(process.env.PORT, () =>
  console.log("todo guai por aqui en el puerto  ", process.env.PORT)
);