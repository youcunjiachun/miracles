const fs=require("fs");
let rs=fs.createReadStream(`${__dirname}/banner1.jpg`);
let cws=fs.createWriteStream(`${__dirname}/banner3.jpg`);
rs.on("open",function () {
    console.log("我想开了")
});
rs.on("ready",function () {
    console.log("我准备好了")
});
rs.on("data",function (data) {
    cws.write(data)
});
rs.on("close",function () {
    console.log("我自闭了");
    cws.close()
});

//这个是简便方法
// const fs=require("fs");
// let crs=fs.createReadStream(`${__dirname}/banner1.jpg`);
// let cws=fs.createWriteStream(`${__dirname}/banner10.jpg`);
// crs.pipe(cws);
