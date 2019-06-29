const express=require("express");
let app=express();
app.listen("8081");
var arr=[
    {id:1},
    {id:2},
    {id:3}
];
app.post("/:id",function (req,res) {
    let parma=req.params;
    res.send(req.params)
});
app.all("/",function (req,res) {
    res.send(arr)
})