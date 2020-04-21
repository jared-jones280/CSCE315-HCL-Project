var http = require('http');
var fs = require('fs');
var path = require('path');
twttr = require('./TwitterMash')
var jsonData;

http.createServer(function (request, response) {
    console.log('request starting...');

    var filePath = '.' + request.url;
    if (filePath == './')
        filePath = './index.html';
    //response.writeHead("Access-Control-Allow-Origin", "*");
    var extname = path.extname(filePath);
    var contentType = 'application/json';
    response.writeHead(200, { 'Content-Type': contentType });
    twttr = require('./TwitterMash')
    twttr.twitHandle.get('search/tweets', { q: 'covid19', count: 100 }, function(err,data,res) {
        console.log(data)
        console.log(Object.getOwnPropertyNames(data))
        response.end(JSON.stringify(data));
    })
    
    
    
    //var data = "testing {}"
    
    

}).listen(8127);
console.log('Server running at http://127.0.0.1:8125/');