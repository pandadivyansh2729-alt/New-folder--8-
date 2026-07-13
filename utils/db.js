const mongoose = require("mongoose")

const dbcon = async () => {
    try {
        await mongoose.connect("mongodb+srv://jsaurabh334:jsaurabh334@cluster0.w1qui.mongodb.net/divyansh?appName=Cluster0")
        console.log("db connected")
    } catch (error) {
        console.log(error)
    }
}
module.exports = dbcon