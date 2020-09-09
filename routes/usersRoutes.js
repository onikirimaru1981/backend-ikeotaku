const express = require('express');
const userControllers = require('../controllers/usersControllers')
const router = express.Router();



//Routes
router.get('/', userControllers.getAllUsuarios);
router.post('/', userControllers.addUser);
router.get('/:id', userControllers.getUsuario);
router.put('/:id', userControllers.updateUser);
router.delete('/:id', userControllers.deleteUser);



module.exports = router;