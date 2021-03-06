const mongoose = require('mongoose');
const utils = require('./utility');
mongoose.Promise = global.Promise;

module.exports = (config) => {
    mongoose.connect(config.connectionString);

    let database = mongoose.connection;
    
    database.on('error', (err) => {
        utils.error(err);
    });
    
    database.once('open', (err) => {
        utils.error(err);
        console.log('Connected!');
    });

    require('../models/User');
};