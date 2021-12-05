const Location = require('../models/Location');
const Weather = require('../models/Weather');

exports.getWeatherByLocation = async (req, res, next) => {
    try {
        const response = await Location.findOne({ name: req.params.location }).populate('weatherDetails');
        res.status(200).json({ message: "Weather by location", data: response });
    } catch (error) {
        res.status(400).json({ message: "Failed to fetch by location", error: error });
    }
}


exports.addLocation = async (req, res, next) => {
    try {
        const { name, region, country, sunrise, sunset, chancesOfRain, airQuality, weatherDetails } = req.body;
        const locationModel = new Location({ name, region, country, sunrise, sunset, chancesOfRain, airQuality, weatherDetails });
        console.log('locationModel', locationModel);
        const locationRes = await locationModel.save();
        res.status(200).json({ message: "location created successfully...", data: locationRes })
    } catch (error) {
        throw new Error(e);
    }
}

exports.addForMultipleLocations = async (req, res, next) => {
    try {
        const array = req.body;
        console.log('locationModel', array);
        Location.insertMany(array)
            .then(function (data) {
                res.status(200).json({ messsage: "Success", data: data });
            }).catch(function (error) {
                return res.status(400).json({ error: error });
            });
    } catch (error) {
        throw new Error(e);
    }
}