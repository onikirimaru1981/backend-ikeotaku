const express = require('express');
const router = express.Router();
const anim_ScoresControllers = require('../controllers/anim_ScoresController');


// //Routes

router.post("/:animeId/score/:userId',anim_ScoresControllers.addScoreAnime");




module.exports = router;