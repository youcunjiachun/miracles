const express=require("express");
const url=require("url");
const fs=require("fs");
let app=express();
app.all("/",function (req,res) {
    let urls=req.url;
    res.sendFile(`${__dirname}/index.html`);
    let path=url.parse(urls,true).query;
    fs.mkdirSync(`${__dirname}/12121`,{ recursive: true});
    fs.writeFileSync(`${__dirname}/12121/test.txt`,`${path.name}和${path.tel}\r\n`,{flag:"a"})
});
app.listen("8080");