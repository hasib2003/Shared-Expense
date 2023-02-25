const mongoose = require("mongoose");


const newExpenseSchema = new mongoose.Schema
(

{

    description : {
        type:String,
        requierd: true,
        trim: true,
    },
    price : {
        type:Number,
        requierd: true,
        trim: true,
    },

    email : {
        type:String,
        requierd: true,
        trim: true,
    },
    roomId:
    {
        type:String,
        requierd: true,
        trim: true, 
    },
    date:
    {
        type:String,
        requierd: true,
        trim: true,
    }
}
,{timestamps:true}

)


module.exports = mongoose.model("newExpense", newExpenseSchema);