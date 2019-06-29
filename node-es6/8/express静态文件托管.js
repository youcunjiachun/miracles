const express=require("express");
let app=express();
app.listen("8081");
app.use("/web",express.static(`${__dirname}/webui`));
app.get("/",function (req,res) {
    res.end("123")
});
