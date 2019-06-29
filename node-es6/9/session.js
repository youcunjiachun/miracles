const express=require("express");
let app=express()
let cookieSession=require("cookie-session");
app.use(cookieSession({
    //修改客户端 session key的标识符
    // name:'sessionID',
    httpOnly:true,
    //设置密钥[随意设置]
    keys:['1234','hello..'],
}
));
app.listen("8080");
app.get("/setsession",function (req,res) {
    req.session.name="rcl";
    res.send("ok")
});
app.get("/getsession",function (req,res) {
    console.log( req.session.age + 1 );
    res.send('get'+ req.session.name)
})

