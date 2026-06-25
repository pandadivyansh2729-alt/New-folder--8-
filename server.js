const express = require("express")
const app = express()
const dbcon=require("./utils/db.js")
const usermodel =require("./model/user.js")
const morgan=require("morgan")
dbcon()
app.use(express.json())
app.use(morgan("combined"))
app.get("/",(req,res)=>{
    res.send("working")
})

app.post("/user",async(req,res)=>{
    const {name,age}=req.body

    console.log(name,age)
    const data=new usermodel({name,age})
    await data.save()
    res.send(data)

})



app.listen(3000, () => { console.log("Server Started") });