var mongoose = require('mongoose'),
    util = require('util');
mongoose.connect('mongodb://localhost/KSTORE');

console.log('=====START=====');

var kstoreSchema = mongoose.Schema({
    name: String,
    type: String,
    langOrFrameWork: [],
    description: String,
    stacktrace: String,
    solution: String
});

var kstore = mongoose.model('kstore', kstoreSchema);

module.exports = kstore;