const express = require('express');
const mongoose = require('mongoose');
const constants = require('./constants');
const router = require('./router');
const cors = require('cors');
const PORT = process.env.PORT || constants.PORT;
const MONGO_URL = process.env.MONGO_URL || constants.MONGO_URL;

const start = async () => {
    const app = express();
    app.use(express.json());
    app.use(cors({ origin: 'http://localhost:3000' }));
    //Database connection
    await mongoose.connect(MONGO_URL, { useNewUrlParser: true });

    // default api path and configured router
    app.use('/api', router);

    // Default endpoints
    app.all('*', function (req, res, next) {
        res.send('Page Not Found');
    });
    //Starting server
    app.listen({ port: PORT }, () => {
        console.log('server connected...');
    });
}

start();