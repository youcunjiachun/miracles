const http=require("http");
const fs=require("fs");
http.createServer(function (request,response) {
    var url=request.url;
    fs.readFile(__dirname+"/暴风"+url,function (err,data) {
        var type=null;
        switch(url.split(".").pop()){
            case "js" : type="application/javascript";break;
            case "css": type="text/css";break;
            case "html": type= "text/html";break;
            default :type="text/html";
        }
        response.writeHead("200",{"content-type":""+type+";charset=utf-8"});
        response.end(data)
    });//渲染的部分要放在回调函数里面
}).listen("8081");