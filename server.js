'use strict'
var connect  = require('connect');
var serveStatic = require('serve-static');

var server = connect();

server.use(  serveStatic(__dirname + '/public'));

server.listen(1337);

var livereload = require('livereload');
var lrserver = livereload.createServer();
lrserver.watch(__dirname + "/public");


console.log('Server running at http://localhost:1337/');
