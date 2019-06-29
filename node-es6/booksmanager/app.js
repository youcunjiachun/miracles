const express=require("express");
const bodyParser=require("body-parser");
let app =express();
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());
app.listen("8080",function () {
    console.log("8080端口服务器成功创建")
});
app.use("/static",express.static(`${__dirname}/static`));
let router=require("./routers/router");
app.use("/books",router);
app.use(function (req,res) {
    res.sendFile(`${__dirname}/views/404.html`)
});