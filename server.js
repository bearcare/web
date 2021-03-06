// import { Connect, SimpleSigner } from 'uport-connect'
require('dotenv').config();
var express = require("express");
var bodyParser = require("body-parser");
var logger = require("morgan");
var mongoose = require("mongoose");
var uport = require('uport-connect');

Connect = uport.Connect;
SimpleSigner = uport.SimpleSigner;


// Require all models
// var db = require("./models");

var PORT = process.env.PORT || 3000;;

// Initialize Express
var app = express();

// Configure middleware

// Use morgan logger for logging requests
app.use(logger("dev"));
// Use body-parser for handling form submissions
app.use(bodyParser.urlencoded({ extended: false }));
// Use express.static to serve the public folder as a static directory
app.use(express.static("public"));


// Set mongoose to leverage built in JavaScript ES6 Promises
// Connect to the Mongo DB
// mongoose.Promise = Promise;
// var MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost/bearcare";
// mongoose.connect(MONGODB_URI, {
//   useMongoClient: true
// });


app.get("/signin", function(request, response) {
  // TODO: uPortfunction goes here & returns response? 
  console.log(process.env.SIGNING_KEY)
  const uport = new Connect('Bear Care', {
    clientId: process.env.CLIENT_ID,
    network: 'rinkeby',
    signer: SimpleSigner(process.env.SIGNING_KEY)
  })

  uport.requestCredentials({
    requested: ['name', 'phone', 'country'],
    notifications: true // We want this if we want to recieve credentials
  })
  .then((credentials) => {
  	response.send(credentials);
    // Do something
    console.log('It worked!')
    console.log(credentials)
  })
   
});

// 



// Start the server
app.listen(PORT, function() {
  console.log("App running on port " + PORT + "!");
});
