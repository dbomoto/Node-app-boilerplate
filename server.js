
// Fast, unopinionated, minimalist web framework for Node.js
var express = require('express');

// Node.js body parsing middleware.
// Parse incoming request bodies in a middleware before your handlers, available under the req.body property.
var bodyParser = require('body-parser');

// initialization of middleware
var app = express();

// Mounts the specified middleware function or functions at the specified path
app.use(bodyParser.urlencoded({ extended: false }));
app.use(function(req,res,next){
  console.log(`${req.method} ${req.path} - ${req.ip}`)
  next();
})

// this redirects the it to the /public folder of the server whenever /public is requested 
app.use("/public",express.static(__dirname + "/public"));

// Routes HTTP GET requests to the specified path with the specified callback functions.
app.get("/now",function(req,res,next){
  req.time = new Date().toString();
  next();
}, function(req,res){
  res.send({"time":req.time});
})

// Routes HTTP GET requests to the specified path with the specified callback functions.
// with parameters i.e. :word , accessed on req.params
app.get("/:word/echo", (req,res)=>{
  res.json({
    echo: req.params.word
  })
})

// Routes HTTP GET requests to the specified path with the specified callback functions.
// user query i.e. /name?first=text&last=text; , accssed on req.query
app.get('/name',(req,res)=>{
  let fn = req.query.first;
  let ln = req.query.last;
  res.send({name: `${fn} ${ln}`});
})

// Routes HTTP POST requests to the specified path with the specified callback functions
// user query i.e. /name?first=text&last=text; , accssed on req.query
app.post('/name',(req,res)=>{
  let fn = req.body.first;
  let ln = req.body.last;
  res.send({name: `${fn} ${ln}`});  
})

console.log("Hello World");

// __dirname is an environment variable that tells you the absolute path of the directory containing the currently executing file.
var absolutePath = __dirname + "/HTML Files/index.html";
app.get("/",function(req,res){
  res.sendFile(absolutePath);
})

app.get("/json",function(req,res){
if (process.env.MESSAGE_STYLE === "uppercase"){
  return res.json({"message":"HELLO JSON"});
} else {
  return res.json({"message":"Hello json"});
}
})
