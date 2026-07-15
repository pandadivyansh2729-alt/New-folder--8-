const mongoose = require("mongoose")

const dbcon = async () => {
    try {
        await mongoose.connect("mongodb+srv://divyansh:Divyansh2729@cluster0.j371spx.mongodb.net/divyansh?appName=Cluster0")
        console.log("db connected")
    } catch (error) {
        console.log(error)
    }
}
module.exports = dbcon