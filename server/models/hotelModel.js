const mongoose = requier("mongoose");

const newHotelSchema = new mongoose.newHotelSchema
(

{

    hotelName : {
        type:String,
        requierd: true,
        trim: true,
    },
    hotelCity: {
        type:String,
        requierd: true,
        trim: true,
    },
    hotelAddress : {
        type:String,
        requierd: true,
        trim: true,
    },

    hotelEmail : {
        type:String,
        requierd: true,
        trim: true,
    },
    hotelPh : {
        type:String,
        requierd: true,
        trim: true,
    }
}
,{timestamps:true}

)


module.exports = mongoose.model("NewHotel", newHotelSchema);