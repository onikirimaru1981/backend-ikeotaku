const express = require('express');
const router = express.Router();
const anim_ScoresControllers = require('../controllers/anim_ScoresController');


// //Routes

router.post('/addScore', anim_ScoresControllers.addScoreAnime);




module.exports = router;