const express = require("express")
const app = express()
const dbcon=require("./utils/db.js")
const Router=require("./routes/Routes.js")

const morgan=require("morgan")
dbcon()
app.use(express.json())
app.use(morgan("combined"))
app.use("/api/v1/",Router)




app.listen(3000, () => { console.log("Server Started") });