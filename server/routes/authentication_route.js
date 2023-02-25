const express = require("express")
const {user_sign_in} = require("../controllers/user_controller")


const routers = express.Router()

routers.post("/",user_sign_in);
module.exports = routers;
