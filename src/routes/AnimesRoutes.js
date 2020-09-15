const express = require('express');
const router = express.Router();
const animesControllers = require('../controllers/AnimesController');


// //Routes
router.get('/animes', animesControllers.getAllAnimes);
router.get('/animes/:animeId', animesControllers.getAnime);
router.get('/animes/:animeId/comments', animesControllers.getAnimeComments);
router.get('/animes/:animeId/favorites', animesControllers.getAnimeFavorites);
router.get('/animes/:animeId/score', animesControllers.getAnimeScore);
router.post('/create', animesControllers.createAnime);
router.delete('/delete/:animeId', animesControllers.deleteAnime);
router.put('/update/:animeId', animesControllers.updateAnime);



module.exports = router;