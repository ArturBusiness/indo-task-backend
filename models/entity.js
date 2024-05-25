const mongoose = require('mongoose');

const entitySchema = new mongoose.Schema({
    name: String,
    coordinate: Number,
    label: String
})


const entityModel = mongoose.model('Entity',entitySchema);
module.exports = entityModel
