var express = require("express");
var route4 = express.Router();

var array =[{
    id:1,
 name:"Pho23ng",
 password:"1",
 address:"HN"	
},{
    id:2,
 name:"San23g",
 password:"1",
 address:"HP"	
},{
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
{
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
{
    id:1,
 name:"Pho2ng",
 password:"ư1",
 address:"HN"	
},{
    id:2,
 name:"Sa12ng",
 password:"1",
 address:"HP"	
},
{
    id:3,
 name:"Tantú",
 password:"1",
 address:"Bắc Ninh"	
},
{
    id:4,
 name:"Thanh",
 password:"12",
 address:"TQ"	
}
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
newUser.id = parseInt(newUser.id);
var ele = array.filter((item)=>{
    return item.id == newUser.id;
})
if(ele.length >= 1){
    res.send("Đã tồn tại user")
} else {
    array.push(newUser);
    res.send({"newUser": newUser})
}

}) // yêu cầu c
route4.put("/list/update", (req, res)=>{
    var newUser = req.body;
    newUser.id = parseInt(newUser.id);
    var ele = array.filter((item)=>{
        return item.id == newUser.id;
    })
    console.log(ele.length);
    console.log(newUser);
    console.log(array[newUser.id - 1]);

   if (ele.length > 0){
       array[newUser.id - 1] = newUser;
       res.send({"user": array})
   } else {
       res.send("Không tìm thấy user cần update")
   }
   console.log(array[newUser.id - 1]);

}) // yêu cầu d
route4.delete("/list/delete/:id", (req, res)=>{
    var delUser = req.params;
    delUser.id = parseInt(delUser.id);
    var ele = array.filter((item)=>{
        return item.id == delUser.id;
    });
    if (ele.length >0){
        array.splice(delUser.id - 1, 1);
       res.send(array);
    } else {
        res.json("Không thấy phần tử cần xoá")
    }
})// yêu cầu e
route4.get("/list/log-in", (req, res)=>{
    var checkInfo = req.body;
    var ele = array.filter((item)=> {
        return item.name == checkInfo.name;
    });
    var ele2 = ele.filter((item)=>{
        return item.password == checkInfo.password;
    });
    if (ele2.length >0){
        res.send("Đăng nhập thành công")
    } else if (ele.length >0) {
        res.send("Sai mật khẩu")
    } else {
        res.send("Sai tên đăng nhập")
    };
}
); // yêu cầu f
route4.get("/list/:page", (req, res)=>{
    var pageSz = 5;
    var start = (parseInt(req.params.page) - 1)*pageSz;
    var newArray = array.slice(start, start + pageSz);
    if(newArray.length >0){
        res.send(newArray)
    } else {
        res.send("Không tìm được thông tin, vui lòng nhập lại số trang")
    }
}) // yêu cầu g



module.exports = route4;