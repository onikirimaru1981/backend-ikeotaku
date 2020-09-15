const express = require('express');
const commentsController = require('../controllers/CommentsController');
const router = express.Router();


//Routes
router.get('/allComments', commentsController.getAllComments);
router.get('/singleComment/:commentId', commentsController.getComment);
router.post('/createComment', commentsController.createComment);
router.put('/updateComment/:commentId', commentsController.updatecomment);
router.delete('/delete/:commentId', commentsController.deleteComment);






module.exports = router;