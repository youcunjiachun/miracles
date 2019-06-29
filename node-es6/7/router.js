const express=require("express");
let router=express.Router();
router.all("/",function (req,res) {
    res.sendFile(`${__dirname}/test.html`)
});
module.exports=router