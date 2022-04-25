require('dotenv').config() //good idea to have this first
const express = require('express')
const app = express()
const methodOverride = require('method-override')
const morgan = require('morgan')
const mongoose = require('mongoose')
const database = mongoose.connection
//all the routes
const notesRouter = require("./routes/notesRoutes")

//listener
const PORT = process.env.PORT || 9001
app.listen(PORT, () => {
    console.log(`Port: ${PORT}`);
  });

//connects mongoose to database
mongoose.connect(process.env.DATABASE_URL, {
    useNewUrlParser: true,
    // useCreateIndex: true,
    // useUnifiedTopology: true,
    // useFindAndModify: false
  });

//mongoose connection status
database.on("error", (err) => console.log(`mongo error! ${err.message}`))
database.on("connected", () => console.log(`mongo connected: ${database.host}:${database.port}`))
database.on("disconnected", () => console.log("mongo disconnected"))

//middleware
app.use(morgan('tiny'));
//body parser middleware, gives us access to req.body
app.use(express.urlencoded({extended:true}))
//methodoverride, enables update and edit routes
app.use(methodOverride("_method"))
//enables use of static folder for app.js and style.css
app.use("/public", express.static("static")); //public is url, static is local folder


// handle the traffic
app.use("/notes", notesRouter)

//handle root requests
app.get("/", (req,res) => {
    res.redirect("/notes")
})

//MUST COME LAST AFTER OTHER MIDDLEWARE
// app.use('/notes', noteController)