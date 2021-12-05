const { promises } = require('fs');
const path = require('path');

exports.logHits = async (req, res, next) => {
    let data = `Request from ${req.ip} at ${new Date()} \n`;
    try {
        await promises.appendFile(path.resolve(__dirname, '../log', 'logger.txt'), data, 'utf8');
    } catch (error) {
        throw error;
    }
    next();
}
