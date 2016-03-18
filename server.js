var express = require('express');
var app = express();
var bodyParser = require('body-parser');

app.use(bodyParser.json()); // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded

app.get('/xorapi/v1/light', function(req, res) {
  // returns state from Raspberry Pi;
  res.json('On / Off');
});

app.post('/xorapi/v1/light/:objectNum/:room/:roomNum/:state', function(req, res) {
  var obj = {
    objectNum: req.params.objectNum,
    room: req.params.room,
    roomNum: req.params.roomNum,
    state: req.params.state
  }

  res.json(obj);

});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});
