var app = require('express')();

var express = require('express');

var path = require('path');

var http = require('http').Server(app);

var port = process.env.PORT || 3002;

app.use(express.static(path.join(__dirname, './public/')));
app.get('/', function (req, res) {
    res.sendFile(__dirname + '/index.html');
});

http.listen(port, function () {
    console.log('Port: ' + port);
});