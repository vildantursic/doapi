var express = require('express');
var http = require('http');
var app = express();

function sendToPi(data){

  var options = {
    host: 'localhost',
    port: 3001,
    path: '/pi?data='+data,
    method: 'POST'
  };

  http.request(options, function(res) {
    console.log('STATUS: ' + res.statusCode);
    console.log('HEADERS: ' + JSON.stringify(res.headers));
    res.setEncoding('utf8');
    res.on('data', function (chunk) {
      console.log('BODY: ' + chunk);
    });
  }).end();

  return true;

}

app.get('/do', function(req, res) {
  res.send('some info for pi');
});

app.post('/do', function(req, res) {
  // res.send(req.query);
  res.json(sendToPi(req.query.data));
});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});
