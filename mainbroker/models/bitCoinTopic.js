const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const BitcoinTopicDataSchema= new Schema({
    name: String,
    symbol: String,
    priceUsd: String,
    priceBtc: String,
    percentChange24hUsd: String,
    lastUpdated: String
});
const BitcoinTopicModel = mongoose.model('BitCoinTopic', BitcoinTopicDataSchema);

module.exports = BitcoinTopicModel