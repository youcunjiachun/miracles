const express=require("express");
let app=express();
const cookiePraser=require("cookie-parser");
app.use(cookiePraser());
// console.log(cookiePraser)
app.get("/getcookie",function (req,res) {
    res.cookie("name","rcl",{
        httpOnly:true,//只允许服务端修改cookie
        maxAge:60*60*1000,
        // path:"/test",//只允许这个路径访问cookie
        // domain:"www.baidu.com"//只允许这个网站访问cookie
    });
    res.send(req.cookies.name)
});

app.listen("8085");