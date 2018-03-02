var http = require('http'); 

var jsonData = {
    'name': 'NodeJS',
    'lang': 'Javascript',
    'use': 'Write once, run everywhere'
};


   http.createServer(function (req, res) {
        res.writeHead(200, {'Content-Type': 'application/json'});
        res.write('Hello World!');
        res.end(JSON.stringify(jsonData));
    }).listen(3000);
    console.log("We are no listening on port 3000");