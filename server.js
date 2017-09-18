'use strict'
var connect  = require('connect');
var serveStatic = require('serve-static');
var livereload = require('livereload');

var server = connect();

server.use(serveStatic(__dirname + '/public'));
server.listen(1337);

var lrserver = livereload.createServer();
lrserver.watch(__dirname + "/public");

console.log(' 🚀 🚀 🚀  => Server running at http://localhost:1337/');