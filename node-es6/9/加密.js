const crypto=require('crypto');
const secret="dsadads";
const hash=crypto.createHmac("sha256",secret)
.update("我是")
.digest("hex");
console.log(hash);