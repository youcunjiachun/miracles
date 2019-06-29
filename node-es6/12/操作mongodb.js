let Mongoose=require("mongoose");
// console.log(Mongoose);
Mongoose.connect("mongodb://localhost/demo",{useNewUrlParser:true});


const Schema=Mongoose.Schema;
//sex的值，1为男，2为女，3为人妖
const flag=new Schema({
    id:Number,
    name:String,
    sex:Number
});
let model=Mongoose.model("users",flag);
model.create({
    id:3,
    name:"rcl2",
    sex:1
});
