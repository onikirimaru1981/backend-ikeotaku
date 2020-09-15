require("dotenv").config();
const mongoose = require('mongoose')
const animes = require('./domain/animes')
const mangas = require('./domain/mangas')

mongoose.connect(process.env.SERVER, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
});

(async () => {

    //Obtenemos los Animes

    console.log("Iniciamos la carga de 'Animes'")
    animes.restartCollection();
    await animes.setData();

    console.log("Iniciamos la carga de 'Mangas'");
    mangas.restartCollection();
    await mangas.setData();

    console.log("Carga de datos terminada con exito");

})();




//process.exit();


