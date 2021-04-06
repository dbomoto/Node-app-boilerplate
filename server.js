
// these are middlewares
var express = require('express');
var bodyParser = require('body-parser');

// initialization of middleware
var app = express();


app.use(bodyParser.urlencoded({ extended: false }));
app.use(function(req,res,next){
  console.log(`${req.method} ${req.path} - ${req.ip}`)
  next();
})

// this redirects the it to the /public folder of the server whenever /public is requested 
app.use("/public",express.static(__dirname + "/public"));


app.get("/now",function(req,res,next){
  req.time = new Date().toString();
  next();
}, function(req,res){
  res.send({"time":req.time});
})

app.get("/:word/echo", (req,res)=>{
  res.json({
    echo: req.params.word
  })
})

app.get('/name',(req,res)=>{
  let fn = req.query.first;
  let ln = req.query.last;
  res.send({name: `${fn} ${ln}`});
})

app.post('/name',(req,res)=>{
  let fn = req.body.first;
  let ln = req.body.last;
  res.send({name: `${fn} ${ln}`});  
})

console.log("Hello World");
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
