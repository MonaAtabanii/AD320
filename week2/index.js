'use strict'
var http = require('http');

const fs = require('fs');

var qs = require("querystring");

let name = require("./names.js");

function serveStatic(res, path, contentType, responseCode){
    if(!responseCode) responseCode = 200;
   fs.readFile(__dirname + path, function(err, data){
        if(err){
          res.writeHead(500, {'Content-Type': 'text/plain'});
          res.end('Internal Server Error');
       }
        else{
          res.writeHead(responseCode, {'Content-Type': contentType});
          res.end(data);
        }
    });
  }

  http.createServer((req,res) => {
     let url = req.url.split("?");  // separate route from query string
     let query = qs.parse(url[1]); // convert query string to object
     let path = url[0].toLowerCase();
        switch(path) {
        case '/':
            res.writeHead(200, {'Content-Type': 'text/plain'});
            let all = name.getAll();
            let resultAll = (all) ? JSON.stringify(all): "Empty Array";
            res.write(resultAll);
        res.end("\n");
        break;

        case '/names':
            fserveStatic(res, 'home.html', 'text/html');
        break;

        case '/users':
            fs.readFile('home.html', (err, data) => {
            if (err) return console.error(err);
            res.writeHead(200, {'Content-Type': 'text/html'});
            res.end(data.toString());
            });
        break;

        case '/home':
            fs.readFile('home.html', (err, data) => {
            if (err) return console.error(err);
            res.writeHead(200, {'Content-Type': 'text/html'});
            res.end(data.toString());
            });
        break;


        default:
            res.writeHead(404, {'Content-Type': 'text/plain'});
            res.end('404: Sorry page Not found');
        break;
        }
        }).listen(process.env.PORT || 3000);


