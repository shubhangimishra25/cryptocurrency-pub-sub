const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const FilterTopicDataSchema = new Schema({
    name: String,
    symbol: String,
    priceUsd: String,
    priceBtc: String,
    percentChange24hUsd: String,
    lastUpdated: String
});

const BitCoinTopicModel= mongoose.model('Bitcoin', FilterTopicDataSchema);
const EthereumTopicModel= mongoose.model('Ethereum', FilterTopicDataSchema);
const TetherTopicModel= mongoose.model('Tether', FilterTopicDataSchema);

module.exports = {BitCoinTopicModel,EthereumTopicModel,TetherTopicModel}