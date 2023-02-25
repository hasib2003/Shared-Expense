
const express = require("express")

const {addExpense,allExpense,clearExpense} = require("../controllers/expenseController.js")


const routers = express.Router()

routers.post("/add",addExpense);
routers.post("/room",allExpense);
routers.post("/clear",clearExpense);
// routers.post("/search",findRoom);
// routers.post("/enter",enterRoom);


// routers.get("/registration/:id",get_user);
// routers.post("/registration/",add_user);
// routers.delete("/registration/:id",delete_user);
// routers.patch("/registration/:id",update_user)
// routers.post("/authentication/",user_sign_in)


module.exports = routers;
