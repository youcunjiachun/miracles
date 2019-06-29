const http=require("http");
http.createServer(function (request,response) {
    const url=request.url;
    // var req=/^\/teacher/;
    // if(req.test(url)){
    //     content="我是teacher"s
    // }else{
    //     content="我是其他"ss
    // }
    if(url.startsWith("/teacher")){
        content="teacher"
    } else if(url.startWith("/student")){
        content="student"
    }else{
        content="食屎啦你"
    }
    response.writeHead("200",{"content-type":"text/html;charset=utf-8"});
    response.write(content);
    response.end()
}).listen("8081");