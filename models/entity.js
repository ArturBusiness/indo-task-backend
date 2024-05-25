const mongoose = require('mongoose');

const entitySchema = new mongoose.Schema({
    name: String,
    coordinate: Array,
    label: Array
})


const entityModel = mongoose.model('Entity',entitySchema);
module.exports = entityModel
