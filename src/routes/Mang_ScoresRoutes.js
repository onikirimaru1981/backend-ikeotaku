const express = require('express');
const router = express.Router();
const mang_ScoresControllers = require('../controllers/mang_ScoresController');


// //Routes
router.post('/addScore', mang_ScoresControllers.addScoreManga);



module.exports = router;