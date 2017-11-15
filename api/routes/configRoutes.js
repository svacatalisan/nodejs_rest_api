'use strict';
module.exports = function(app) {
    const config = require('../controllers/configController');

    // config Routes
    app.route('/config')
        .get(config.getConfig);

    app.route('/register')
        .post(config.registerConfig);
};