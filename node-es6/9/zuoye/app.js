const express=require("express");
const url=require("url");
const path=require("path");
const bodyParser=require("body-parser");
let app=express();
app.use(bodyParser.urlencoded({extended:false}));
app.use(express.static(`${__dirname}/lib`));
app.use(bodyParser.json());
app.listen("8082");
let router=require("./routers/router.js");
app.use(router);
app.use(function (req,res) {
    res.send("404 notfound")
});
console.log(router)