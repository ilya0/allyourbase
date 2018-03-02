
const express = require('express')
const bodyParser= require('body-parser')
const app = express()
const MongoClient = require('mongodb').MongoClient
var db


app.use(bodyParser.urlencoded({extended: true}))

MongoClient.connect('mongodb://test:test@ds155288.mlab.com:55288/allyourbase', (err, client) => {
  if (err) return console.log(err)
  db = client.db('allyourbase') // whatever your database name is
  app.listen(3000, () => {
    console.log('listening on 3000')
  })
})


app.post('/quotes', (req, res) => {
        db.collection('quotes').save(req.body, (err, result) => {
          if (err) return console.log(err)
      
          console.log('saved to database')
          res.redirect('/')
        })
      })


//middleware
app.use(bodyParser.json());

app.use(bodyParser.urlencoded({ extended: true }));
//The urlencoded method within body-parser tells body-parser to extract data from the <form> element and add them to the body property in the request object.

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