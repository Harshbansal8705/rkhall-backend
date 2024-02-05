const express = require("express")
const mongoose = require("mongoose");
const cors = require("cors");
const { login } = require("./controller/user")
const { verifyOTP } = require("./controller/user")
const app = express();
require('dotenv').config()

try {
    mongoose.connect(process.env.MONGO_URI).then(() => console.log("Connected to mongoose"))
} catch (e) {
    console.log(e)
}


app.use(cors())

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.post("/login", login)
app.post("/verify", verifyOTP)

app.listen(8000, () => {
    console.log("Listening on port 8000...")
})