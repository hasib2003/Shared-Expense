const mongoose = require("mongoose");


const newRoomSchema = new mongoose.Schema
(

{

    RoomName : {
        type:String,
        requierd: true,
        trim: true,
    },
    entryKey : {
        type:String,
        requierd: true,
        trim: true,
    },

    masterKey : {
        type:String,
        requierd: true,
        trim: true,
    }
}
,{timestamps:true}

)


module.exports = mongoose.model("newRoom", newRoomSchema);