const express = require('express');
const router = express.Router();
const mangasControllers = require('../controllers/MangasController');


// //Routes
router.get('/', mangasControllers.getAllMangas);
router.get('/:mangaId', mangasControllers.getManga);
router.get('/:mangaId/comments', mangasControllers.getMangaComments);
router.get('/:mangaId/favorites', mangasControllers.getMangaFavorites);
router.get('/:mangaId/score', mangasControllers.getMangaScore);
router.post('/', mangasControllers.createManga);
router.delete('/:mangaId', mangasControllers.deleteManga);
router.put('/:mangaId', mangasControllers.updateManga);



module.exports = router;