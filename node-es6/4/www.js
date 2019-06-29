// const http=require("http");
// const server =http.createServer();
// server.on("request",function (request,response) {
//     response.write("<h1>this is a h1</h1>");
//     response.end()
// });
// server.listen("8081");
const http =require("http");
const server=http.createServer();
server.on("request",function (request,response) {
    response.writeHead(200,{"Content-Type":"text/html"})
    response.write("<h1>this is another h1</h1>");
    response.end()
});
server.listen("8083");