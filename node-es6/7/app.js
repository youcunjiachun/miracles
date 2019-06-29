const express=require("express");
const app=express();
app.listen("8081");
const router=require("./router");
app.use(router);