const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const Broker2TopicDataSchema= new Schema({
    userid:String,
    topic: String
});
const Broker2TopicModel = mongoose.model('Broker2Topic', Broker2TopicDataSchema);

module.exports = Broker2TopicModel