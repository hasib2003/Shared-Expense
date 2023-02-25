

// definitions of the api related to one table usually
const express = require("express")
const {addUser,allUser,deleteUser,logout} = require("../controllers/user_controller")


const routers = express.Router()

// routers.get("/registration/",get_users);
// routers.get("/registration/:id",get_user);
routers.post("/registration/",addUser);
routers.post("/delete",deleteUser);
routers.delete("/logout",logout);
routers.post("/",allUser);
// routers.delete("/registration/:id",delete_user);
// routers.patch("/registration/:id",update_user)
// routers.post("/authentication/",user_sign_in)
module.exports = routers;
