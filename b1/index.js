var express = require("express");
var route1 = express.Router();
var path = require("path")

route1.get("/", (req, res)=>{
    res.sendFile(path.join(__dirname, "baitap1.html"))
    })
route1.get("/login", (req, res)=>{
    res.sendFile(path.join(__dirname, "baitap5.html"))
    });
route1.get("/download", (req, res)=>{
    res.download("/Users/mjlq2/DEV/Nodemy/b14-express/b1/wp6268466.jpg")
    });
module.exports = route1;