var express = require('express');
var app = express();
var bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: false }));

app.use(function(req,res,next){
  console.log(`${req.method} ${req.path} - ${req.ip}`)
  next();
})

app.get("/now",function(req,res,next){
  req.time = new Date().toString();
  next();
}, function(req,res){
  res.send({"time":req.time});
})

app.get("/:word/echo", (req,res)=>{
  // console.log(req.params)
  // const {word} = req.params;
  // console.log({word})
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
var absolutePath = __dirname + "/views/index.html";
app.get("/",function(req,res){
  res.sendFile(absolutePath);
})

app.use("/public",express.static(__dirname + "/public"));

app.get("/json",function(req,res){
if (process.env.MESSAGE_STYLE === "uppercase"){
  return res.json({"message":"HELLO JSON"});
} else {
  return res.json({"message":"Hello json"});
}
})
