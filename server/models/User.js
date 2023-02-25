const mongoose = require("mongoose");


const newUser = new mongoose.Schema
(

{

    Name : {
        type:String,
        requierd: true,
        trim: true,
    },
    email : {
        type:String,
        requierd: true,
        trim: true,
    },

    password : {
        type:String,
        requierd: true,
        trim: true,
    },

    roomId:
    {
        type:String,
        requierd: true,
        trim: true,
    }
}
,{timestamps:true}

)


module.exports = mongoose.model("newUser", newUser);