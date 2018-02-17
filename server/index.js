const express = require('express');
const bodyParser = require('body-parser');
const database = require('../database/index.js')
const sdk = require('../helpers/sdk/sdk.js')
const geocoder = require('geocoder');
var hoho = {"key":"see your note app on your iphone for the key"}

// TODO: You just figured out how to get the user data from the webform into your astrology api call (see line 18)
// NEXT: You Must still add an input form to enter city of birth, and then have geocoder convert that into latitude and longitude coordinates.
// ALso remember to change the name of hoho (line 6)


const app = express();

app.use(express.static(__dirname + '/../client/dist'));
// Remember: express.static is used to SERVE UP YOUR STATIC ASSETS
app.use(bodyParser.json());

app.post('/astrology', function (req, res) {
  let {name, birthdate, hour, minute} = req.body
  var resource = "personality_report/tropical";
  var data = {
      'date': 10,
      'month': 12,
      'year': 1993,
      'hour': 1,
      'minute': 25,
      'latitude': 25,
      'longitude': 82,
      'timezone': 5.5
  };

  geocoder.geocode("Atlanta, GA", ( err, geoData, hoho) => {
    console.log(geoData.results[0].geometry.location, "THIS IS GEODATA")
    sdk.call(resource, data.date, data.month, data.year, data.hour, data.minute, geoData.results[0].geometry.location.lat, geoData.results[0].geometry.location.lng, data.timezone, function(error, result){
      if(error) {
        console.log('ERROR');
      } else {
        console.log('Response has arrived from API server --');
        // console.log(result);
      }
    });
  });



});



// app.post('/', function (req, res) {
//
// });


// let port = process.env.PORT || 61691;
let port = 61691;

app.listen(port, function() {
  console.log(`listening on port ${port}`);
});
