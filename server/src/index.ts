import express = require("express");
import mongoose = require("mongoose");
import path = require("path");
require("dotenv").config();

const PORT = process.env.Port || 3001;

const app = express();

mongoose.connect(`${process.env.MONGODB_URI}`)

app.use(express.json());
app.use(express.urlencoded({extended: false}))

app.listen(PORT, () => {
    console.log(`Server running on PORT ${PORT}`)
})