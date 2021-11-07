const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const topicSchema = new Schema({
    userid:String,
    topic: String
});

const TopicModel = mongoose.model('Topic', topicSchema);

module.exports = TopicModel;