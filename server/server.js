const express = require("express")
const app = express()
const cors = require("cors")
const mongoose = require("mongoose")
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const session = require("express-session");


const userRoutes = require("./routes/user_routes")
const roomRoute = require("./routes/roomRoutes")
const expenseRoute = require("./routes/expenseRoute")



const url = "mongodb+srv://hasibaslam:354577Bo.@expense.hlu2sgf.mongodb.net/?retryWrites=true&w=majority"


app.use(express.json())
app.use(cors({credentials:true,exposedHeaders:"set-cookie", origin: process.env.FRONT_END}));
app.use(cookieParser());
app.use (bodyParser.urlencoded({extended:true}));
app.use(session
    (
        {
        key:"room",
        secret:"secret",
        resave:false,
        saveUninitialized:false,
        cookie:{
            expires: 10*15*60*364,
            httpOnly: true,
            secure: false,
        },

        }
    )
)
app.use(
    (req,res,next)=>{
        console.log(req.path, req.method)
        next();
    }
)

// using the router method to adress the apis
app.use("/api/user",userRoutes)
app.use("/api/room",roomRoute)
app.use("/api/expense",expenseRoute)
//connecting to the database db
mongoose.connect(url)
    .then( () => {
        // listening the app after the successful connection
        app.listen(4000,()=>{
            console.log("connected to the database and server is running on port 4000")
        })
    })
    .catch( (err) => {
        console.error(`Error connecting to the database: ${err}`);
    })
