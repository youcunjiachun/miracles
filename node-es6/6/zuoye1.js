const http=require("http");
const path=require("path");
const url=require("url");
const mime=require("mime");
const fs=require("fs");
http.createServer(function (request,response) {
    let urls=request.url;
    let type=mime.getType(urls);
    let thispath=path.join(__dirname,"/index.html");
    fs.readFile(thispath,function (err,data) {
        response.writeHead("200",{"content-type":""+type+";charset=utf-8"});
        response.end(data)
    });
    if(urls.startsWith("/test")){
        let {name,tel}=url.parse(urls,true).query;
        console.log(url.parse(urls,true));
        console.log(name,tel);
        fs.writeFile(`${__dirname}/time.txt`,"姓名="+name+","+"电话="+tel+"\r\n",{flag:"a"},function () {
        })
    }
}).listen("8081");
