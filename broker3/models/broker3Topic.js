const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const Broker3TopicSchema= new Schema({
    userid:String,
    topic: String
});
const Broker3TopicModel = mongoose.model('Broker3Topic', Broker3TopicSchema);

module.exports = Broker3TopicModel