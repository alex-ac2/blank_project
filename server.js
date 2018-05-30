var express = require('express')
var app = express()

var server = app.listen(8080);
app.use(express.static('public'));

console.log("Test p5.js environment now running on port 8080...");
