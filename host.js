 
var express = require('express');
var app = express();
var path = require('path');

//app.use(express.static('img'));

// viewed at http://localhost:8080
app.get('/raad', function(req, res) {
    res.sendFile(path.join(__dirname + '/Home.html'));
});

// To import js file
app.get('/js/new.js', function(req, res) {
    res.sendFile(path.join(__dirname + '/js/new.js'));
});

// To import css file
app.get('/style/index.css', function(req, res) {
    res.sendFile(path.join(__dirname + '/style/index.css'));
});

app.get('/style/media.css', function(req, res) {
    res.sendFile(path.join(__dirname + '/style/media.css'));
});


app.listen(8080);