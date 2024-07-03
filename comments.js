// Create web server
// Run: node comments.js

var http = require('http');
var url = require('url');
var qs = require('querystring');

var comments = [];

http.createServer(function (req