const express = require('express');
const bodyParser = require('body-parser');
const database = require('../database/index.js')
const sdk = require('../sdk-helpers/sdk.js')

const app = express();

app.use(express.static(__dirname + '/../client/dist'));
// Remember: express.static is used to SERVE UP YOUR STATIC ASSETS
app.use(bodyParser.json());

app.get('/items', function (req, res) {
  items.selectAll(function(err, data) {
    if(err) {
      res.sendStatus(500);
    } else {
      res.json(data);
    }
  });
});


let port = process.env.PORT || 0616;

app.listen(61691, function() {
  console.log(`listening on port ${port}`);
});
