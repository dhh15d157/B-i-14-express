var express = require("express");
var app = express();
var bodyParser = require("body-parser");
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
 
// parse application/json
app.use(bodyParser.json())


var route1 = require("../b1/index") 
var route2 = require("../b2/index") 
var route3 = require("../b3/courseRouter")
var route4 = require("../b4/index")
var route5 = require("../b5/index")


app.listen(8000, (req, res)=>{
    console.log("Kết nối sever thành công")
});
app.use("/b1", route1);
app.use("/b2", route2);
app.use("/nodemy", route3);
app.use("/b4", route4);
app.use("/b5", route5);