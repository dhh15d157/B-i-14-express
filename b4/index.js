var express = require("express");
var route4 = express.Router();

var array =[{
    id:1,
 name:"Phong",
 password:"1",
 address:"HN"	
},{
    id:2,
 name:"Sang",
 password:"1",
 address:"HP"	
},
{
    id:3,
 name:"Tan",
 password:"1",
 address:"Bắc Ninh"	
},
{
    id:4,
 name:"Dũng",
 password:"1",
 address:"TQ"	
},
]
route4.get("/list", (req, res)=>{
    res.send(array);
}) // yêu cầu a
route4.get("/list/find/:id", (req, res)=>{
    var user = array.filter((item)=>{
        return item["id"] == req.params.id})
    if(user.length == 0){
        res.send("không tồn tại user")
    } else {
        res.send(user)
    }

}) // yêu cầu b 
route4.post("/list/add/", (req, res)=>{
var newUser = req.body;
var ele = array.filter((item)=>{
    return item.id == newUser.id;
})
if(ele){
    res.send("Đã tồn tại user")
} else {
    array.push(newUser);
}
console.log("Thêm mới user thành công!")
}) // yêu cầu c

module.exports = route4;