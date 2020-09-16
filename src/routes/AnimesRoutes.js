const express = require('express');
const router = express.Router();
const animesControllers = require('../controllers/AnimesController');
const anim_ScoresControllers = require('../controllers/anim_ScoresController');


// //Routes
router.get('/', animesControllers.getAllAnimes);
router.get('/:animeId', animesControllers.get);

router.get('/:animeId/comments', animesControllers.getAnimeComments);
router.get('/:animeId/favorites', animesControllers.getAnimeFavorites);
router.get('/:animeId/score', animesControllers.getAnimeScore);


router.post('/', animesControllers.createAnime);
router.delete('/:animeId', animesControllers.deleteAnime);
router.put('/:animeId', animesControllers.updateAnime);

router.post('/:animeId/score/:userId', anim_ScoresControllers.addScoreAnime);





module.exports = router;