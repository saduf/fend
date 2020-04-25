let newEntry = '';

var path = require('path')
const express = require('express')
const mockAPIResponse = require('./mockAPI.js')
var aylien = require("aylien_textapi");
const dotenv = require('dotenv');
dotenv.config();

// set aylien API credentias
var textapi = new aylien({
    application_id: process.env.API_ID,
    application_key: process.env.API_KEY
  });

const app = express()
/* Dependencies */
const bodyParser = require('body-parser')
/* Middleware*/
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
const cors = require('cors');
app.use(cors());

app.use(express.static('dist'))

console.log(__dirname)

app.get('/', function (req, res) {
    res.sendFile('dist/index.html')
    //res.sendFile(path.resolve('src/client/views/index.html'))
})

app.post('/sentiment', function (req, res) {
    console.log(`Your API ID is ${process.env.API_ID}`);
    console.log(`Your API key is ${process.env.API_KEY}`);
    newEntry = textapi.sentiment({
        'text': req.body.inputPhrase
      }, function(error, response) {
        if (error === null) {
          console.log(response);
          newEntry = {
            polarity: response.polarity,
            subjectivity: response.subjectivity,
            text: response.text,
            polarity_confidence: response.polarity_confidence,
            subjectivity_confidence: response.subjectivity_confidence
          }
          res.send(newEntry)
        } else {
          console.log(error);
        }
      });
    //res.header("Access-Control-Allow-Origin", "*");
    //res.send(newEntry)
})

// designates what port the app will listen to for incoming requests
app.listen(8081, function () {
    console.log('Example app listening on port 8081!')
})