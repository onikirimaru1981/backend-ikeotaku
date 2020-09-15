const express = require('express');
const router = express.Router();
const favoritesControllers = require('../controllers/FavoritesController');


//Routes
router.get('/allFavorites', favoritesControllers.getAllFavorites);
router.post('/addFavorite', favoritesControllers.addFavorite);
router.put('/updateFavorite/:favoriteId', favoritesControllers.updateFavorite);
router.delete('/delete/:favoriteId', favoritesControllers.deleteFavorite);





module.exports = router;