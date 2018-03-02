
const express = require('express');
const bodyParser = require('body-parser'); //parsing the body of a form
const app = express();
const MongoClient = require('mongodb').MongoClient;


//mongo db server setup
MongoClient.connect('your-mongo-url', (err, client)=>{
      //need to add th server link here
      if (err) return console.log(err)
      db = client.db('star-wars-quotes') // whatever your database name is
      app.listen(3000, () => {
        console.log('listening on 3000')
      })
    });




//middleware
const urlencodedParser = bodyParser.urlencoded({extended : true}); 
//The urlencoded method within body-parser tells body-parser to extract data from the <form> element and add them to the body property in the request object.
app.use(urlencodedParser);
app.set('view engine', 'ejs');


//root route
app.get("/", (req,res)=>{
                res.render("index");
        });


app.post('/quotes', (req,res)=>{
        console.log(req.body);
})





//contact us route
app.get("/contact-us", (req,res) =>{
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