/*
    Written By: Group 3
    Tested By: Group 3
    Debugged By: Group 3
*/

const mongoose = require('mongoose');

const tooltipSchema = new mongoose.Schema({
    term: {
        type: String,
        required: true,
    },
    definition: {
        type: String,
        required: true,
    },
    url: {
        type: String,
        required: true,
    }
});

module.exports = mongoose.model('Tooltip', tooltipSchema);
