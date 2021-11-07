const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const TetherTopicSchema= new Schema({
    name: String,
    symbol: String,
    priceUsd: String,
    priceBtc: String,
    percentChange24hUsd: String,
    lastUpdated: String
});
const TetherTopicModel = mongoose.model('TetherTopic', TetherTopicSchema);

module.exports = TetherTopicModel