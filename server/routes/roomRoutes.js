
const express = require("express");
const {addRoom,findRoom,enterRoom,authenSession} = require("../controllers/roomController.js")


const routers = express.Router()

routers.post("/registration",addRoom);
routers.post("/search",findRoom);
routers.post("/enter",enterRoom);
routers.get("/enter",authenSession);



module.exports = routers;
