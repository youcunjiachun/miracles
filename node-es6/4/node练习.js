// const http=require("http");
// const server=http.createServer();
// server.on("request",function (request,response) {
//     response.writeHead(200,{"content-type":"text/html"});
//     response.write("<h1>this is a h1</h1>");
//     response.end()
// })
// server.listen("8081");
//上面是简单的node服务器





// const fs=require("fs");
// fs.readFile("./数组乱序.html",function (error,data) {
//     console.log(data.toString())
// });
//上面是简单的读取数据

// function add() {
//     this.obj={};
// }
// add.prototype.on=function (name,fn) {//订阅
//     if(this.obj[name]){
//         this.obj[name].push(fn)
//     }else{
//         this.obj[name]=[fn]
//     }
// };
// add.prototype.out=function (name) {//发布
//     console.log(this.obj);
//     this.obj[name].map(value=>{value()})
//
// };
// var rcl=new add();
// rcl.on("rcl",function () {
//     console.log("这是rcl")
// });
// rcl.on("rcl",function () {
//     console.log("这是rcl")
// });
// rcl.out("rcl");
//上面是订阅发布模式
// var arr=[1,2,3,4,5];
// function iteratot(arr) {
//     var i=0;
//     return {
//         next(){
//             return {value:arr[i++],done:i>arr.length}
//         }
//     }
// }
// var it=iteratot(arr);
// var flag=false;
// while(!flag){
//     var result=it.next();
//     console.log(result);
//     flag=result.done
// }
// var arr=[1,2,3,4,5];
// // console.dir(arr)
// function iterator(arr) {
//     var i=0;
//     return{
//         next:function () {
//             return {value:arr[i++],done:i>arr.length}
//         }
//     }
// }
// var it=iterator(arr);
// var flag=false;
// while(!flag){
//     var result=it.next();
//     console.log(result);
//     flag=result.done
// }
let a=1,b=2;
a=[a,b];
b=a[0];
a=a[1];
console.log(a,b);
