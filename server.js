const express = require('express')
const app = express()
const methodOverride = require('method-override')
require('dotenv').config()
const mongoose = require('mongoose')
const database = mongoose.connection

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
database.on("connected", () => console.log(`mongo connected: ${db.host}:${db.port}`))
database.on("disconnected", () => console.log("mongo disconnected"))

//middleware
app.use(morgan('tiny'));
//body parser middleware, gives us access to req.body
app.use(express.urlencoded({extended:true}))
//methodoverride, enables update and edit routes
app.use(methodOverride("_method"))
//enables use of static folder for app.js and style.css
app.use("/static", express.static("public"));


//all the routes
const notesRouter = require("./routes/notesRoutes")

// handle the traffic
app.use("/notes", notesRouter)

//handle root requests
app.get("/", (req,res) => {
    res.redirect("/notes")
}

//MUST COME LAST AFTER OTHER MIDDLEWARE
app.use('/notes', notesController)