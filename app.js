var express = require("express");
var bodyParser = require("body-parser");
var cors = require("cors");

var app = module.exports = express();
app.use(bodyParser.json());
app.use(cors());

app.listen(3000,function(){
    console.log("Server Started...");
});

app.get("/api/whoami",function(req,res,next){
    var vLanguage = req.acceptsLanguages();
    var vSoftware = req.get("User-Agent");
    var vIp = req.ip;
    res.json({"ipaddress":vIp,"language":vLanguage[0],"software":vSoftware});
});