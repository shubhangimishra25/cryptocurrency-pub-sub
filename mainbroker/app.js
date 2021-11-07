const fs = require('fs');
const path = require('path');
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const Topic = require('./models/topic');
const RawData = require('./models/rawData');
const User = require('./models/User');
const BitCoinTopic = require('./models/bitCoinTopic');
const app = express();
var cors = require('cors')

const accessLogStream = fs.createWriteStream(
  path.join(__dirname, 'logs', 'access.log'),
  { flags: 'a' }
);

app.use(morgan('combined', { stream: accessLogStream }));

app.use(bodyParser.json());

app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, DELETE, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', '*');
  next();
});


app.post('/rawData', async (req, res) => {
  RawData.collection.drop().catch(err => err.message.match(/ns not found/) ? null : '');

  req.body.forEach(topicFromAPI => {

    const topic = {
      name: topicFromAPI.name,
      symbol: topicFromAPI.symbol,
      priceUsd: topicFromAPI.priceUsd,
      priceBtc: topicFromAPI.priceBtc,
      percentChange24hUsd: topicFromAPI.percentChange24hUsd,
      lastUpdated: topicFromAPI.lastUpdated
    }
    console.log(topic)
  
    const newTopic = new RawData(topic)
    // console.log(newTopic)
    newTopic.save()
   

  
   




  
  

    // console.log(newTopic)

  })
});

app.post('/signup', async (req, res) => {
  console.log('TRYING TO STORE USER');
  const userdetails = {
    username: req.body.username,
    password: req.body.password
  }
  console.log(userdetails);
  const userdata = new User(userdetails);

  const userRow = await User.findOne({ username: userdetails.username })
  console.log(userRow)

  if (userRow != null) {
    try {
      res.status(500).json({ message: 'Please Login you are already registered.' });
      console.log(userdetails)
      console.log(req.body)
    } catch (err) {
      console.error('ERROR storing user');
      console.error(err.message);
      res.status(500).json({ message: 'Failed to save user.' });
    }
  }
  else {
    await userdata.save();
    res
      .status(201)
      .json({ message: 'Successfully signed  up the user' });

  }
});

app.post('/login', async (req, res) => {
  console.log('TRYING TO GET USER');
  const userdetails = {
    username: req.body.username,
    password: req.body.password
  }
  console.log(req.body);
  const userdata = new User(userdetails);
  const userRow = await User.findOne(userdetails)
  console.log('userror' + userRow)

  if (userRow != null) {
    res
      .status(201)
      .json({ message: 'Successfully logged in' });
  }
  else {

    res
      .status(500)
      .json({ message: 'Invalid user details' });

  }
});



mongoose.connect(
  'mongodb://root:root@mongodb:27017/crypto?authSource=admin',
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  },
  (err) => {
    if (err) {
      console.error('FAILED TO CONNECT TO MONGODB');
      console.error(err);
    } else {
      console.log('CONNECTED TO MONGODB!!!');
     app.listen('8084');
//      
    }
  }
);

