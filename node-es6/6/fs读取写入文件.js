const fs=require("fs");
let buffer1=Buffer.alloc(15);
fs.open(`${__dirname}/test.html`,"r",function (err,fd) {
    fs.read(fd,buffer1,2,3,5,function (err,bytesRead,buffer) {
        console.log(err,bytesRead,buffer)

    })
});