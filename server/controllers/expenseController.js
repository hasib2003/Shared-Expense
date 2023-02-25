
const { default: mongoose } = require("mongoose");

const userModel = require("../models/User")
const roomModel = require("../models/Room")

const expenseModel = require("../models/Expense");
const expenseRecord = require("../models/Records");



// clear all expenses of a room
const clearExpense = async (req, res) => {

    const { master, userId} = req.body;

    try {


        const user = await userModel.findById(userId)
            
            if(user)
            {
                const room = await roomModel.find({"masterKey":master})

                if(room[0])
                {
                    // console.log("room ",room["_id"])

                    let temp =room[0]["_id"].toString();

                  const tarExpense  = await expenseModel.find({"roomId":temp})
                  const record = await expenseRecord.insertMany(tarExpense);
                        
                  const deleted = await expenseModel.deleteMany({"roomId":temp})
                  res.status(200).json({"status":"accepted","message":"reseted successfully"})
                }
                else
                {
                    res.status(200).json({"status":"rejected","message":"invalid master key"})

                }

            }
            else
            {
                res.status(200).json({"status":"rejected","message":"no such user"})
            }



    } catch (err) {
        res.status(400).json({ error: err.message })
        console.log("error:", err.message)
    }



}
const addExpense = async (req, res) => {

    const { price, description, email,roomId,date } = req.body;

    try {


        const expense = await expenseModel.create({ description, price, email,roomId,date})

        res.status(200).json(expense);


    } catch (err) {
        res.status(400).json({ error: err.message })
        console.log("error:", err.message)
    }



}

const allExpense = async (req, res) => {
    const { roomId } = req.body;

    try {

        // no need to find the room first will be session based;

        // finding the roomates first
        const roomates = await userModel.find({ "roomId": roomId });

        let expense = [];
        let user;
        let temp = [];
        let obj = {};


        for (let index = 0; index < roomates.length; index++) {

      
            user = roomates[index];



            temp = await expenseModel.find({ "email": user["email"] });

            obj[user["Name"]] = temp;


            expense.push(obj);
            obj = {}


        }

        console.log(expense)

        res.status(200).json({ "expense": expense });

    }
    catch (err) {
        console.log(err)
        res.status(400).json(err)
    }



}




module.exports = {
    addExpense,
    allExpense,
    clearExpense
}