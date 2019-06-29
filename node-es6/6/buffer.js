
// console.log(Buffer.allocUnsafe(10));
// console.log(Buffer.from("中国"))
const fs=require("fs");
fs.readFile(__dirname+"/test.html",{encoding:"utf-8"},function (err,data) {
    console.log(data)
});