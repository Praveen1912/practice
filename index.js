const express=require('express')
const mongoose=require('mongoose')
const app=express()
const bodyParser=require("body-parser")
const cors=require("cors")
const path=require("path")
app.use(bodyParser.urlencoded({extended:true}))
mongoose.connect("mongodb://Localhost:27017/examdb",{useNewUrlParser:true})
app.use(cors())
mongoose.connection.on('connected',function(){
    console.log("connected to database");
})
mongoose.connection.on('error',function(err){
    console.log(err);
})
//schema database
const schema_name=new mongoose.Schema({
  
    //field:dtype
  })
  const model_name=mongoose.model("database_name",schema_name)
//to find record from db
//model_name.find({fieldname:req.body.value},function(err,result){})
/*

const variable=new model_name(
      {
        fieldname:value
      })
       variable.save();
*/
app.get('/',function(req,res){
    
})



port=3000
app.listen(port,function(){
    console.log("server running")
})