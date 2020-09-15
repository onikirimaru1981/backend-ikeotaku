const express = require('express');
const router = express.Router();
const mangasControllers = require('../controllers/MangasController');


// //Routes
router.get('/mangas', mangasControllers.getAllMangas);
router.get('/mangas/:mangaId', mangasControllers.getManga);
router.get('/mangas/:mangaId/comments', mangasControllers.getMangaComments);
router.get('/mangas/:mangaId/favorites', mangasControllers.getMangaFavorites);
router.get('/mangas/:mangaId/score', mangasControllers.getMangaScore);
router.post('/create', mangasControllers.createManga);
router.delete('/delete/:mangaId', mangasControllers.deleteManga);
router.put('/update/:mangaId', mangasControllers.updateManga);



module.exports = router;