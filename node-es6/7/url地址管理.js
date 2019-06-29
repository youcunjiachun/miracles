const express=require("express");
let app=express();
// app.all(/^\/aa/,function (req,res) {
//     res.send("/^\\/aa/")
// });
app.listen("8082");
// app.all("/login/:id",function (req,res) {
//     res.send(req.params)
// });
app.all("/login",function (req,res) {
    res.send(req.query)
});