const mongoose = require("mongoose");
const Weather = require("../models/Weather");

let weatherController = {
    addWeather: async (req, res) => {
        const { date, temperature, windSpeed } = req.body;
        let weatherModel = new Weather({ date, temperature, windSpeed });
        let savedWeather = await weatherModel.save();
        res.status(200).json({ messsage: "Success", data: savedWeather });
    },
    addMany: (req, res) => {
        const array = req.body;
        console.log(array);
        Weather.insertMany(array)
            .then(function (data) {
                res.status(200).json({ messsage: "Success", data: data });
            }).catch(function (error) {
                return res.status(400).json({ error: error });
            });
    }
};

module.exports = weatherController;