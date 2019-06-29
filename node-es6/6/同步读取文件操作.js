const fs=require("fs");
const buffer=Buffer.alloc(20);
let fd=fs.openSync(`${__dirname}/test.html`,"r");
fs.readSync(fd,buffer,3,6,0,)