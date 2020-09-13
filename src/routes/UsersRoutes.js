const express = require('express');
const router = express.Router();
const usersControllers = require('../controllers/UsersControllers');


//Routes
router.get('/', usersControllers.getAllUsers);
router.get('/:userId', usersControllers.getUser);
router.post('/', usersControllers.createUser);
router.put('/:userId', usersControllers.updateUser);
router.delete('/:userId', usersControllers.deleteUser);


module.exports = router;