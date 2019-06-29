const express=require("express");
const path=require("path");
const fs=require("fs");
let booksobj=require("../data/allbooks.json");
let router=express.Router();
router.get("/show",function (req,res) {
    let flag=req.query.flag;
    if(flag==1){
        res.send(booksobj)
    }else{
        res.sendFile(path.join(__dirname,"../views/books.html"));
    }
});
router.get("/show/:id",function (req,res) {
    res.send("这是某一本书")
});
router.get("/delete",function (req,res) {
    let query=req.query;
    console.log(query.id)
});
router.post("/put",function (req,res) {
    const {name,price}=req.body;
    let id=booksobj[booksobj.length-1].id+1;
    let current={id:id,name:name,price:price};
    booksobj.push(current);
    let result=JSON.stringify(booksobj);
    fs.writeFileSync(path.join(__dirname,"../data/allbooks.json"),result);
    res.send("书本添加成功")
});
router.get("/put",function (req,res) {
    res.sendFile(path.join(__dirname,"../views/add.html"))
})
module.exports=router;