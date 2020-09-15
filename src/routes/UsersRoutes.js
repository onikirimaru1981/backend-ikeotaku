const express = require('express');
const router = express.Router();
const usersControllers = require('../controllers/UsersController');

//especificar rutas en cada route
//Routes
router.get('/users', usersControllers.getAllUsers);
router.get('/users/:userId', usersControllers.getUser);
// router.get('/users/:userId/comments', usersControllers.getUserComments);
// router.get('/users/:userId/favorites', usersControllers.getUserFavorites);
// router.get('/users/:userId/score', usersControllers.getUserScore);
router.post('/create', usersControllers.createUser);
router.delete('/delete/:userId', usersControllers.deleteUser);
router.put('/update/:userId', usersControllers.updateUser);
router.post('/login', usersControllers.login)


module.exports = router;