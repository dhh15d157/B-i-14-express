var express = require("express");
var route2 = express.Router();
var app = express();


route2.get("/javascript/bai1", (req, res)=>{
    res.send("Welcome bạn đến javascript bài 1")
});

route2.get("/javascript/bai2", (req, res)=>{
    res.send("Welcome bạn đến javascript bài 1")
});
route2.get("/html/bai1", (req, res)=>{
    res.send("Welcome bạn đến html bài 1")
});
module.exports = route2;