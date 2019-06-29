const express=require("express");
let app=express();
const request=require("request");
const url=require("url");
app.all("/",function (req,res) {
    let urls=req.url;
    res.sendFile(`${__dirname}/index2.html`);
    if(urls.startsWith("/?")){
        var pathobj=url.parse(urls,true).query;
    }
    pathobj&&request("http://route.showapi.com/1196-1?showapi_appid=96669&showapi_sign=9cc6c906d1224ff5ab2850a76de4310e&keyword="+pathobj.search+"&page=1",function (a,b,c) {
        console.log(a,b,c)
    })
});
app.listen("8082");