const mongoose = require('mongoose');

const locationSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true
    },
    region: {
        type: String,
        required: true,
        trim: true
    },
    country: {
        type: String,
        required: true,
        trim: true
    },
    sunrise: {
        type: String,
        required: true,
    },
    sunset: {
        type: String,
        required: true,
    },
    chancesOfRain: {
        type: String,
        required: true,
    },
    airQuality: {
        type: String,
        required: true,
    },
    weatherDetails: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Weather'
    }]
}, { timestamps: true });

Location = mongoose.model('Location', locationSchema);
module.exports = Location;
