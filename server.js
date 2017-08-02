var config = require('config');
var express = require('express');
var expressUtil = require('./app/core/express');
var app = express();

expressUtil(app);
app.listen(config.port, function () {
  console.log('app started at ', config.port);
});

process.on('uncaughtException', function (err) {
  console.error(JSON.parse(JSON.stringify(err, [
    'stack',
    'message',
    'inner'
  ], 2)));
});