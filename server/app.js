const express = require("express")
const mongoose = require("mongoose")
const bodyparser = require("body-parser")
const cors = require('cors')

const route1 = require("./route1")
const app = express()

app.use(cors())


mongoose.connect('mongodb://localhost:27017/consultancy',{
    useNewUrlParser : true,
    useUnifiedTopology:true
   
})
.then(()=>console.log("db connected"))
.catch(err => console.log(err))


//middleware
app.use(bodyparser.urlencoded({ extended: false }))
app.use(bodyparser.json())
app.use(express.static("public"))
app.set("view engine","ejs")


//routes
app.use(route1)
app.listen(9000,()=>{
    console.log("server runnning on port 9000")
})