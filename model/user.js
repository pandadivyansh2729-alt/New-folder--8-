const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
  name: {
    type: String,
     required: true,
  },
  age: {
    type: Number,
     required: true,
  },
},{timestamps:true});
const usermodel=new mongoose.model("userschema",userSchema)
module.exports=usermodel
