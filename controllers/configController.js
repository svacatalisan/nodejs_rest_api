'use strict';


const mongoose = require('mongoose'),
    Task = mongoose.model('Tasks');

exports.getConfig = function(req, res) {
    Task.find({}, function(err, task) {
        if (err) res.send(err);
        res.json(task);
    });
};

