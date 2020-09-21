//require modules
require("dotenv").config();
const express = require("express");
const cors = require("cors");
const mongoose = require('mongoose')
const usersRoutes = require("./src/routes/UsersRoutes");
const animesRoutes = require("./src/routes/AnimesRoutes");
const mangasRoutes = require("./src/routes/MangasRoutes");




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

// middleware autorizacion next()-- > middleware authorization token nodejs
app.use((req, res, next) => {


  console.log("Soy el middleware de autorizacion, autorizame los huevos.")
  next();

})


//Routes
app.use("/api/users", usersRoutes);
app.use("/api/mangas", mangasRoutes);
app.use("/api/animes", animesRoutes);

app.get('/', (req, res) => {
  res.send('todo ok')
});

// app.get('/', (req, res) => {
//     res.status(200).send('<h1>Bienvenido a ikeotaku</h1>');
// });

//execute app listening on port
app.listen(process.env.PORT, () =>
  console.log("todo guai por aqui en el puerto  ", process.env.PORT)
);