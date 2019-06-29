const fs=require("fs");
fs.readFile(__dirname+"/数组乱序.html",function (err,data) {
    console.log(data.toString());
    console.log(__dirname);//这个文件的上层目录
    console.log(__filename)//这个文件的完整目录，包括文件本身
});