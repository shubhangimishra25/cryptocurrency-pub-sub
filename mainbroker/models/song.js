const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const cryptoSchema = new Schema({
  text: String
});

const CryptoModel = mongoose.model('crypto', cryptoSchema);

module.exports = CryptoModel;