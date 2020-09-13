const express = require('express');
const router = express.Router();
const commentsControllers = require('../controllers/CommentsControllers');

//Routes
// router.get('/', commentsControllers.getAllComment);
// router.get('/:commentId', commentsControllers);
router.post('/', commentsControllers.createComment);
// router.put('/:userId', usersControllers.updateComment);
// router.delete('/:userId', usersControllers.deleteComment);






module.exports = router;