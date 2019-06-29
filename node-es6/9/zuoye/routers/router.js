const express=require("express");
let router=express.Router();
const path=require("path");
const fs=require("fs");
//--------------------------------华丽的分割线-----------------------------------------
let userdata=require(path.join(__dirname,"../data/userdata.json"));
router.post("/put",function (req,res) {
    let current=req.body;
    userdata.push(current);
    let result=JSON.stringify(userdata);
    fs.writeFileSync(path.join(__dirname,"../data/userdata.json"),result)
    res.send("注册成功，回去登录试试吧");
});
router.get("/login",function (req,res) {
    res.sendFile(path.join(__dirname,"../views/index.html"))
});
router.get("/show",function (req,res) {
    res.send(userdata)
});
router.post("/check",function (req,res) {
    let{account,password}=req.body;
    console.log(req.body)
    if(userdata[0].account==account){
        if(userdata[0].password==password){
            res.send(true)
        }else{
            res.send(false)
        }
    }else{
        res.send(false)
    }
})
module.exports=router;