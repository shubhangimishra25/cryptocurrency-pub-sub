const express = require('express');
const request = require('request');
var axios = require("axios").default;

 const app = express()
 const cron = require("node-cron");
   


var options = {
  method: 'GET',
  url: 'https://dev-api.shrimpy.io/v1/exchanges/kucoin/ticker',

};



//  Creating a cron job which runs on every 1 minute
 cron.schedule("*/1 * * *  *", function() {
    console.log("running a task every 1 minute");
    axios.request(options).then(function (response) {

        publish(response.data)
    
    }).catch(function (error) {
        console.error(error);
    });
});

function publish(data) {

  const options = {
     url: 'http://mainbroker:8084/rawData/',
     json: true,
    body: data
    };
    console.log("options",options)

    request.post(options, (err, res, body) => {
        if (err) {
            return console.log(err,'yoerrror');
        }
        console.log(body);
    });
}


const port = 3001;

app.listen(port, () => console.log('Server running... on port 3005'));
module.exports = publish;