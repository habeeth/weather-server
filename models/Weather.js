const mongoose = require('mongoose');

const WeatherSchema = new mongoose.Schema({
    location: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Location'
    },
    date: {
        type: Date,
        required: true
    },
    temperature: {
        type: String,
        required: true,
    },
    windSpeed: {
        type: String,
        required: true,
    }
}, { timestamps: true });

Weather = mongoose.model('Weather', WeatherSchema);
module.exports = Weather;