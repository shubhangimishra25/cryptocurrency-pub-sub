const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const Broker1Schema= new Schema({
    userid:String,
    topic: String
});
const Broker1Model = mongoose.model('Broker1', Broker1Schema);

module.exports = Broker1Model