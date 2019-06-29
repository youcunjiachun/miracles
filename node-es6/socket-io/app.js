// const http =require("http");
// let server=http.createServer();
// server.on("request",function (req,res) {
//     res.end("123")
// });
// server.listen("8081");
// app.get("/",function (re1,res) {
//     res.sendFile(path.join(__dirname,"index.html"))
// });



const express=require("express");
let app=express();
const path=require("path");
const server=require("http").createServer(app);
server.listen("8082");
const io=require("socket.io")(server);
io.on("connection",function (socket) {
    socket.on("send",function (msg) {
        socket.broadcast.emit("receive",msg)
    })
});
app.use(express.static("./"));






