// definition of all the callbacks related to the api of the user

const { default: mongoose } = require("mongoose");
const userModel = require("../models/User")
const roomModel = require("../models/Room")
const expenseModel = require("../models/Expense")

const ObjectId = require('mongodb').ObjectID;
// all the functions defined here are the async functions




//get all users 
const allUser = async (req,res)=>{

    let all_users = await userModel.find({"roomId":req.body.roomId})

    for (let index = 0; index < all_users.length; index++) {
        const element = all_users[index];

        all_users[index] = {"name":element["Name"],"id":element["_id"].toString()}
        
    }


    if(all_users.length === 0)
    {
        return res.status(200).json({msg:"no users registered"})
    }
    res.status(200).json({"users":all_users})

}

// register a new user
const addUser = async (req,res)=>{

    const {Name, email,password,roomId,masterKey} = req.body;

    try{

        const roomStatus = await roomModel.findById(roomId);

        if(roomStatus && roomStatus["masterKey"] === masterKey)
        {

            const emailCheck = await userModel.findOne({"email":email})

            console.log(emailCheck)

            if(!emailCheck)
            {
                const user_document = await userModel.create(
                    {Name, email, password, roomId}
                );
                res.status(200).json({"status":"allowed","user":user_document});
            }
            else
            {

                res.status(200).json({"status":"rejected","Error":"Email Already Taken"})            

            }

               
        }
        else
        {
            res.status(200).json({"Error":"No room found with this master key"})            
        }


        
    } catch(err){
        res.status(400).json({error:err.message})
        console.log("error:",err.message)
    }
 


}

// logging out of the app


const logout = async (req,res)=>
{

    try{
    req.session.destroy();
    res.status(200).json({
        "msg":"logged out successfully"
    })
    }
    catch(err)
    {
        res.status(400).json({"Error":err})
    }
}

// user sign in
const user_sign_in = async  (req,res)=>{

    const {userName, password} = req.body
    console.log(userName)

    var authorized = false;
    const target_user = await userModel.findOne({email:userName,password:password})

    
    if (target_user){
    return res.status(200).json({user:target_user,status:true})
    }
    else{
    res.status(404).json({status:false})}
}
// delete a user

const deleteUser = async (req,res)=>{
    const {roomId, userId, masterKey} = req.body;
    // if(!mongoose.Types.ObjectId.isValid(id)){
    //     return  res.status(404).json({msg:`${id} is not a valid id`})

    // }
    const user = await userModel.findById(userId);
    const room = await roomModel.findById(roomId)

    if(user["roomId"] === roomId && room["masterKey"] === masterKey )
    {


    const user_document =await userModel.findByIdAndDelete(userId)
    const expenseRemoval = await expenseModel.deleteMany({"email":user_document["email"]})
    if (!user_document){
        return  res.status(200).json({msg:`No user registered with this ${userId}`})
    }
    else
    {
    res.status(200).json({status:"allowed",msg:`user with id ${userId} deleted successfully`})
    }
}
else
{
    res.status(200).json(
        {
            "Error":"Invalid Master Key"
        }
    )
}

}

//update a user 
const update_user = async (req,res)=>{
    const {id} = req.params;
    if(!mongoose.Types.ObjectId.isValid(id)){
        return  res.status(404).json({msg:`${id} is not a valid id`})

    }
    const target_user = await userModel.findOneAndUpdate({_id:id},{...req.body})
    if(!target_user){
        return res.status(404).json({msg:`No user registered with this ${id}`})
    }
    res.status(200).json(target_user)
}

module.exports = {
    addUser,
    allUser,
    deleteUser,
    logout
}