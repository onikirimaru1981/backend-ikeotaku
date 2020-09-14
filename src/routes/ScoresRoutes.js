const express = require('express');
const scoresControllers = require('../controllers/ScoresControllers');
const router = express.Router();


//Routes


router.post('/addScore', scoresControllers.addScore);
router.put('/updateScore/:scoreId', scoresControllers.updateScore);
router.delete('/scoreDelete/:scoreId', scoresControllers.deleteScore);






module.exports = router;