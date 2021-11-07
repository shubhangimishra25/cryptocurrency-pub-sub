const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const EthereumTopicSchema= new Schema({
    name: String,
    symbol: String,
    priceUsd: String,
    priceBtc: String,
    percentChange24hUsd: String,
    lastUpdated: String
});
const EthereumTopicModel = mongoose.model('EthereumTopic', EthereumTopicSchema);

module.exports = EthereumTopicModel