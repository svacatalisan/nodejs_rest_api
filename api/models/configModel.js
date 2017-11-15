'use strict';
const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const ConfigSchema = new Schema({
    name: {
        type: Object,
        required: 'Kindly enter the name of the config'
    },
    value: {
        type: String,
        required: 'Kindly enter the name of the task'
    },
    Created_date: {
        type: Date,
        default: Date.now
    },
    status: {
        type: [{
            type: String,
            enum: ['pending', 'ongoing', 'completed']
        }],
        default: ['pending']
    }
});

module.exports = mongoose.model('Configs', ConfigSchema);