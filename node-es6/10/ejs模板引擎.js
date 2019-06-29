const express=require("express");
let app=express();
const path=require("path");
app.set("view engine","ejs");
app.set("views",`${__dirname}/template`);
app.engine('html',require('ejs').__express);
app.listen("8081");
app.get("/get",function (req,res) {
    res.render("index.html",{name:"rcl"})
});
console.log(path.join(__dirname,"../10"));