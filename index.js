'use strict'

const http = require('http');
const fs = require('fs');

let name = require("./names.js");
  
const serverRunner = function (req, res) {
    if (req.method == 'GET' && req.url == '/names') {
        fs.readFile('home.html', function(error, file) {
            res.writeHead(200, {'Content-Type': 'text/html'});
            res.write(file);
            return res.end();
        });
    }    

    else if (req.method == 'POST' && req.url == '/') {
        let initData = [];
        req.on('initData', function(chunck) {
            initData.push(chunck);
        })

        req.on('end', function () {
            let data = Buffer.concat(initData)
            const result = JSON.parse(JSON.stringify(data));
            console.log(result);
            const returnName = result.answer;
            res.write(`The new insertion is: ${returnName}`);
        })
        res.end();
    }
    else{
        res.end('Play with names array');
    }
}

const server = http.createServer(serverRunner);
server.listen(3000); 