'use strict';


const mongoose = require('mongoose'),
    Config = mongoose.model('Configs');

const config = {
    "page": {
        "pageTitle": "Hello page",
        "accessibility": {
            "privateRoute": false, // check if a page is private or not
            "criteria":[] // if a page is private check the criteria before rendering, ex:is user is logged in
        }
    },
    "components": [
        {
            "id": "test1",
            "key": "uniqueKey1",
            "type": "Image",
            "staticProps": {
                "fallBackSrc": 'http://labs.google.com/ridefinder/images/mm_20_blue.png'
            },
            "initState": {},
            "validators": [],
            "handlers": []
        },
        {
            "id": "test2",
            "key": "uniqueKey2",
            "type": "TextField",
            "staticProps": {},
            "initState": {},
            "validators": [],
            "handlers": []
        },
        {
            "id": "test3",
            "key": "uniqueKey3",
            "type": "TextField",
            "staticProps": {},
            "initState": {},
            "validators": [],
            "handlers": []
        },
        {
            "id": "test4",
            "key": "uniqueKey4",
            "type": "RaisedButton",
            "staticProps": {},
            "initState": {},
            "validators": [],
            "handlers": []
        }
    ],
    "rules": []
};

exports.getConfig = function(req, res) {
    Config.find({}, function(err, config) {
        if (err) res.send(err);
        res.json(config);
    });
};

exports.registerConfig = function(req, res) {
    const registerConfig = new Config({name: 'defaultConfig', value: JSON.stringify(config)});
    registerConfig.save(function(err, config) {
        if (err) res.send(err);
        res.json(config);
    });
};

