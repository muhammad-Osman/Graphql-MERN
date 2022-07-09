const mongoose = require('mongoose');

const CLientSchema = mongoose.Schema({
    name: String,
    email: String,
    phone: String
});

module.exports = mongoose.model('Client', CLientSchema);