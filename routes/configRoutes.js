'use strict';
module.exports = function(app) {
    const config = require('../controllers/configController');

    // todoList Routes
    app.route('/config')
        .get(config.getConfig);
};