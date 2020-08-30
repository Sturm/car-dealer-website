const express = require('express');
const router = express.Router();

const CarController = require('../controllers/CarController');

/** CarController.js */
router.get('/api/cars', CarController.getCars);
router.get('/api/car/:slug', CarController.getCar);
router.post('/api/cars', CarController.addCar);

module.exports = router;