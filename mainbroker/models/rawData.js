const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const rawDataSchema = new Schema({
    name: String,
    symbol: String,
    priceUsd: String,
    priceBtc: String,
    percentChange24hUsd: String,
    lastUpdated: String
});

const RawDataModel= mongoose.model('RawData', rawDataSchema);

module.exports = RawDataModel