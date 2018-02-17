const express = require('express');
const bodyParser = require('body-parser');
const database = require('../database/index.js')
const sdk = require('../helpers/sdk/sdk.js')
// const config = require('../../config.js');

// const geocoder = require('geocoder');
const geocoder = require('google-geocoder')({key:process.env.KEY});



const app = express();

app.use(express.static(__dirname + '/../client/dist'));
// Remember: express.static is used to SERVE UP YOUR STATIC ASSETS
app.use(bodyParser.json());

app.post('/astrology', function (req, res) {
  const resource = "personality_report/tropical";
  let {name, birthdate, hour, minute, loc} = req.body
  let year = birthdate.years;
  let month = birthdate.months + 1;
  let date = birthdate.date;

  if(!loc) {
    loc = 'New York, NY'
  }

  if (parseInt(minute)) {
    minute = parseInt(minute)
  } else {
    minute = 0
  };

console.log(loc, 'loc????');
    geocoder.find(loc, (err, geoData) => {
      let lat = 0;
      let long = 0;
      if (geoData !== undefined) {
        lat = geoData[0].location.lat;
        long = geoData[0].location.lng;
      }
      console.log(">>", `${month}-${date}-${year}`, "<<birthdate");
      var tzData = {//TODO: fix these stats
        latitude: lat,
        longitude: long,
        date: `${month}-${date}-${year}`
      }



      sdk.tzCall(tzData, function(err, result) {
        let tzone = JSON.parse(result).timezone
        if (tzone === -5) {
          tzone = -5.3;
          //This is because the API can't handle a timezone of -5 for some odd reason
        }

        console.log(result, "tzone", lat, long);
        // if (month < 11) {
        //   month += 1
        //   console.log(month);
        // }
        console.log("month!!!!", month);
        let userData = [date, month, year, hour, minute, lat, long, -5.3];

        sdk.call('planets/tropical', ...userData, (err, signs) => {
          if (err) {
            console.log('ERRAAAA');
          } else {
            sdk.call(resource, ...userData, (error, result) => {
              if(error) {
                console.log('ERROR');
              } else {
                console.log('Response has arrived from API server --');
                let resultAndSign = {
                  portrait: result,
                  signData: signs
                }
                console.log(result);
                res.send(resultAndSign)
              }
            });
          }
        });
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
