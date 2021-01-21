'use strict'

const http = require('http');
const fs = require('fs');

let name = require("./names.js");
  
http.createServer(function (req, res) {
    if (req.method == 'GET' && req.url == '/names') {
        fs.readFile('home.html', function(error, file) {
            res.writeHead(200, {'Content-Type': 'text/html'});
            res.write(file);
            return res.end();
        });
    }    
    else if (req.method == 'POST' && req.url == '/') {
        console.log(`url is ${req.url}`);
        res.writeHead(200, {'Content-Type': 'application/json'});
            let all = name.getAll();
            let resultAll = (all) ? JSON.stringify(all): "Empty Array";
            res.write(resultAll);
        res.end("\n");
    }
    else{
        res.writeHead(404, {'Content-Type': 'text/plain'});
        res.end('404: Sorry page Not found');
    }

}).listen(3000); 