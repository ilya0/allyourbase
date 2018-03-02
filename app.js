var http = require('http'); 

var fs = require('fs');

var jsonData = {
    'name': 'NodeJS',
    'lang': 'Javascript',
    'use': 'Write once, run everywhere'
};


http.createServer(function (req, res) {
    fs.readFile('./index.html', function(err, data) {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write(data);
    res.end();
});

       
    }).listen(3000);
    console.log("We are no listening on port 3000");