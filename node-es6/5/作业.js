const http=require("http");
const fs=require("fs");
const path=require("path");
const mime=require("mime");
http.createServer(function (request,response) {
    let url=request.url;
    url=url=="/"? "/index.html":url;
    fs.readFile(path.join(__dirname,"/webui",url),function (err,data) {
        let extra=(mime.getType(url));
        response.writeHead("200",{"content":""+extra+";charset=utf-8"});
        response.end(data);
    })
}).listen("8081");