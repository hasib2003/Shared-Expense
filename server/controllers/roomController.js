// definition of all the callbacks related to the api of the user

const { default: mongoose } = require("mongoose");
const roomModel = require("../models/Room")
const userModel = require("../models/User")
// all the functions defined here are the async functions



// get a specific room by its id
const findRoom = async (req, res) => {
    const { id } = req.body;

    try {
        const targetRoom = await roomModel.findById(id)
        if (!targetRoom) {
            return res.status(404).json({ "Error": `No room registered with id = ${id}` })
        }
        else {
            res.status(200).json(targetRoom)
        }
    }
    catch (err) {
        res.status(400).json(err)
    }
}


// register a new room
const addRoom = async (req, res) => {

    const { RoomName, entryKey, masterKey } = req.body;
    console.log(RoomName, entryKey, masterKey)

    try {

        const entryCheck = await roomModel.findOne({ "entryKey": entryKey });
        const masterCheck = await roomModel.findOne({ "masterKey": masterKey });

        if (entryCheck || masterCheck) {
            res.status(200).json({
                "status": "rejected",
                "Error": "Entry key or the Master Key already taken choose other"
            })
        }
        else {

            const roomDocument = await roomModel.create(
                { RoomName, entryKey, masterKey }
            );
            res.status(200).json({"status":"allowed","room":roomDocument});

        }
    } catch (err) {
        res.status(400).json({ error: err.message })
        console.log("error:", err.message)
    }



}


// room access
const enterRoom = async (req, res) => {

    const {email,password,entryKey } = req.body;

    try {
    const targetRoom = await roomModel.findOne({ "entryKey": entryKey });

        if (targetRoom) {

            const targetUser = await userModel.findOne({"email":email,"password":password,"roomId":targetRoom["_id"].toString()})
            if(targetUser)
            {
                req.session.room = targetRoom
                req.session.user = targetUser

                res.status(200).json({ "status": "allowed" , "room":targetRoom["_id"].toString(), "user":targetUser})
            }
            else

            {
                res.status(200).json({ "status": "rejected","Error":"No such Roomate"})

            }
        }
        else {
            res.status(200).json({ "status": "rejected", "Error": "Invalid Entry Key" })
        }

    }
    catch (err) {
        console.log(err)
        res.status(400).json(err)
    }
}


// authenSession

const authenSession = async (req,res)=>
{
    if (req.session.room && req.session.user)
    {

        res.status(200).json({"status":"allowed", "room":req.session.room["_id"].toString(), "rName":req.session.room["RoomName"],  "user":req.session.user["_id"].toString(),"email":req.session.user["email"],"name":req.session.user["Name"] })
    }
    else
    {
        res.status(200).json({"status":"rejected"})
    }
}


// delete a room

const delete_user = async (req, res) => {
    const { id } = req.params;
    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({ msg: `${id} is not a valid id` })

    }
    const user_document = await userModel.findByIdAndRemove(id)
    if (!user_document) {
        return res.status(404).json({ msg: `No user registered with this ${id}` })
    }
    res.status(200).json({ msg: `user with id ${id} deleted successfully` })


}


module.exports = {
    addRoom,
    findRoom,
    enterRoom,
    authenSession
}