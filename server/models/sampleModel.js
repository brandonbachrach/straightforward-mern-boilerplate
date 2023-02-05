const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const sampleModel = new Schema({
    name: {
        type: String,
        required: true,
        unique: true
    },
    description:{
        type: String
    },
});

module.exports = mongoose.model('sampleModel',sampleModel);