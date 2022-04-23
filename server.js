const express = require('express')
const app = express()
const methodOverride = require('method-override')
require('dotenv').config()
const mongoose = require('mongoose')
const database = mongoose.connection

//connects mongoose to database
mongoose.connect(process.env.DATABASE_URL, {
    useNewUrlParser: true,
    // useCreateIndex: true,
    // useUnifiedTopology: true,
    // useFindAndModify: false
  });

//mongoose connection status
database.on("error", (err) => console.log(`mongo error! ${err.message}`))
database.on("connected", () => console.log(`mongo connected: ${db.host}:${db.port}`))
database.on("disconnected", () => console.log("mongo disconnected"))