const express=require("express");
let app=express();
app.get("/",function (req,res) {
    console.log(req.query);
    res.send("123")
});
app.post("/login",function (req,res) {
    res.send("登陆页面")
});
app.listen("8080");