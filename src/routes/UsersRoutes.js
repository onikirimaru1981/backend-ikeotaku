const express = require('express');
const router = express.Router();
const usersControllers = require('../controllers/UsersControllers');

//especificar rutas en cada route
//Routes
router.get('/allUsers', usersControllers.getAllUsers);
router.get('/singleUser/:userId', usersControllers.getUser);
router.post('/newUser', usersControllers.createUser);
router.put('/update/:userId', usersControllers.updateUser);
router.delete('/delete/:userId', usersControllers.deleteUser);
router.post('/login', usersControllers.login)


module.exports = router;