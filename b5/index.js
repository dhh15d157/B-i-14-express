var express = require("express");
const route4 = require("../b4");
const { route } = require("../b4");
var route5 = express.Router();

var obj = {
    name : "nodemy"
};
route5.get("/", (req, res)=>{
    res.send(obj);
}) // yêu cầu a
route5.get("/find/:key", (req, res)=>{
    var key = req.params;
    var result = obj[key.key];
    if (result !== undefined){
        res.send(result);
    } else {
        res.send("Không thấy thuộc tính cần tìm")
    }
}) // yêu cầu b
route5.post("/add/", (req, res)=>{
    var newProperty = req.body;
    console.log(newProperty);
    var newObj = Object.assign(obj, newProperty);
    newObj.age = parseInt(newObj.age)
    res.send(newObj);
}) // yêu cầu c
route5.put("/update/:key", (req, res)=>{
    var key = req.params.key
    var value = req.body.value
    if (obj[key] !== undefined){
        obj[key] = value;
        res.send(obj)
    } else {
        res.send("Không tìm thấy thuộc tính")
    }
}) // yêu cầu d
route5.delete("/delete/:key", (req, res)=>{
    var key = req.params.key
    if (obj[key] !== undefined){
        delete obj[key];
        res.send(obj)
    } else {
        res.send("Không tìm thấy thuộc tính")
    }
}) // yêu cầu e
module.exports = route5;