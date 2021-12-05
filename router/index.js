const express = require('express');
const { logHits } = require('../middlewares');
const { getWeatherByLocation, addLocation, addForMultipleLocations } = require('../controllers/location');
const { addWeather, addMany } = require('../controllers/weather');

const router = express.Router();

router.get('/weather/:location', logHits, getWeatherByLocation);
router.post('/weather', logHits, addWeather);
router.post('/weather/multiple', logHits, addMany);

router.post('/location', logHits, addLocation);
router.post('/location/multiple', logHits, addForMultipleLocations);

module.exports = router;
