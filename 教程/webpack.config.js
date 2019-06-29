const path=require("path")
module.exports={
    entry:path.join(__dirname,"./src/main.js"),//入口，表示要打包那个文件
    output:{
         path:path.join(__dirname,"./dist"),
         filename:"bundle.js"
},
mode:"development"
}