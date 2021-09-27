const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const songSchema = new Schema({
  text: String
});

const SongModel = mongoose.model('Song', songSchema);

module.exports = SongModel;