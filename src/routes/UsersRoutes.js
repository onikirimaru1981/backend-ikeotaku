const express = require('express');
const router = express.Router();
const usersControllers = require('../controllers/UsersController');

//especificar rutas en cada route
//Routes
router.get('/', usersControllers.getAllUsers);
router.get('/:userId', usersControllers.getUser);
// router.get('/users/:userId/comments', usersControllers.getUserComments);
// router.get('/users/:userId/favorites', usersControllers.getUserFavorites);
// router.get('/users/:userId/score', usersControllers.getUserScore);
router.post('/', usersControllers.createUser);
router.put('/:userId', usersControllers.updateUser);
router.post('/login', usersControllers.login)


module.exports = router;