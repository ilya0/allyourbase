// var http = require('http'); 

// var fs = require('fs');

// var jsonData = {
//     'name': 'NodeJS',
//     'lang': 'Javascript',
//     'use': 'Write once, run everywhere'
// };


// http.createServer(function (req, res) {
//     fs.readFile('./index.html', function(err, data) {
//     res.writeHead(200, {'Content-Type': 'text/html'});
//     res.write(data);
//     res.end();
// });

       
//     }).listen(3000);
//     console.log("We are no listening on port 3000");



//now using express

var express = require('express');
var bodyParser = require('body-parser');
var app = express();

var urlencodedParser = bodyParser.urlencoded({extended : false});
app.use(urlencodedParser);
app.set('view engine', 'ejs');


//root route
app.get("/", function(req,res){
                res.render("index");
        });
//contact us route
app.get("/contact-us", function(req,res){
    res.write("You have contacted us. Details are below");
    res.write("\nHi "+ req.body.firstname + ", you said:");
    res.write("\nMessage: "+ req.body.message)
    res.write("\nWe would use your provided email "+ req.body.email+ " to get back to you");
    res.end();
        });

app.post("/contact-us", function(req,res){
                res.write("You have contacted us. Details are below");
                res.write("\nHi "+ req.body.firstname + ", you said:");
                res.write("\nMessage: "+ req.body.message)
                res.write("\nWe would use your provided email "+ req.body.email+ " to get back to you");
                res.end();
        });

app.listen(8080, 'localhost');
console.log("We are now listening on port 8080"); //Helps us know our app is actually running