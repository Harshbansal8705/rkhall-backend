const express = require("express")
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();

app.use(cors())

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.post("/login", login)

app.listen(8000, () => {
    console.log("Listening on port 8000")
    console.log("connecting to mongoose...")
})