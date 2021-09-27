const fs = require('fs');
const path = require('path');

const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const morgan = require('morgan');

const Song = require('./models/song');

const app = express();

const accessLogStream = fs.createWriteStream(
  path.join(__dirname, 'logs', 'access.log'),
  { flags: 'a' }
);

app.use(morgan('combined', { stream: accessLogStream }));

app.use(bodyParser.json());

app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, DELETE, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
  next();
});

app.get('/songs', async (req, res) => {
  console.log('TRYING TO FETCH SONGS');
  try {
    const songs = await Song.find();
    res.status(200).json({
      songs: songs.map((song) => ({
        id: song.id,
        text: song.text,
      })),
    });
    console.log('FETCHED SONGS');
  } catch (err) {
    console.error('ERROR FETCHING SONGS');
    console.error(err.message);
    res.status(500).json({ message: 'Failed to load songs.' });
  }
});

app.post('/songs', async (req, res) => {
  console.log('TRYING TO STORE SONG');
  const songText = req.body.text;

  if (!songText || songText.trim().length === 0) {
    console.log('INVALID INPUT - NO TEXT');
    return res.status(422).json({ message: 'Invalid song text.' });
  }

  const song = new Song({
    text: songText,
  });

  try {
    await song.save();
    res
      .status(201)
      .json({ message: 'Song saved', song: { id: song.id, text: songText } });
    console.log('STORED NEW SONG');
  } catch (err) {
    console.error('ERROR FETCHING SONGS');
    console.error(err.message);
    res.status(500).json({ message: 'Failed to save song.' });
  }
});

app.delete('/songs/:id', async (req, res) => {
  console.log('TRYING TO DELETE SONG');
  try {
    await Song.deleteOne({ _id: req.params.id });
    res.status(200).json({ message: 'Deleted song!' });
    console.log('DELETED SONG');
  } catch (err) {
    console.error('ERROR FETCHING SONGS');
    console.error(err.message);
    res.status(500).json({ message: 'Failed to delete song.' });
  }
});

mongoose.connect(
  'mongodb://root:root@mongodb:27017/favorite-songs?authSource=admin',
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  },
  (err) => {
    if (err) {
      console.error('FAILED TO CONNECT TO MONGODB');
      console.error(err);
    } else {
      console.log('CONNECTED TO MONGODB!!');
      app.listen(80);
    }
  }
);
