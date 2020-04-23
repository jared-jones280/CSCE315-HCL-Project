var http = require('http');
var fs = require('fs');
var path = require('path');
twttr = require('./TwitterConnect')
var jsonData;

http.createServer(function (request, response) {
    console.log('request starting...');
    response.setHeader('Access-Control-Allow-Origin', '*');
    
    var searchTerm = request.url.substr(1);
    console.log(searchTerm)

    
    var contentType = 'application/json';
    response.writeHead(200, { 'Content-Type': contentType });
    twttr = require('./TwitterConnect')
    if(searchTerm == "$Trending")
    {
        twttr.twitHandle.get('search/tweets', { q: 'covid', count: 3 }, function(err,data,res) {
            console.log(data)
            //console.log(Object.getOwnPropertyNames(data))
            response.end(JSON.stringify(data));
        })
    }
    else{
        twttr.twitHandle.get('search/tweets', { q: searchTerm, count: 3 }, function(err,data,res) {
            console.log(data)
            //console.log(Object.getOwnPropertyNames(data))
            response.end(JSON.stringify(data));
        })
    }
        
    
    
    
    //var data = "testing {}"
    
    

}).listen(8127);
console.log('Server running at http://127.0.0.1:8125/');