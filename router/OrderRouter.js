const express=require("express");

const OrderService = require("../services/OrderService");
const UserService = require("../services/UserService");
const OrderRouter = express.Router();
OrderRouter.get("/order/:uname", async(req, res) => {
    var { uname} = req.params;
    var order = await OrderService.getKartByUname(uname);
    res.json(order);
  });
  OrderRouter.post("/order", async(req, res) => {
    var { uname} = req.headers.authorization.split(" ")[1].split(":")[0];
    var uid=await UserService.getIdByUname(uname);
    console.log("uid="+uid);
    var order = await OrderService.placeorder(uid,pid);
    res.json(order);
  });
  module.exports=OrderRouter;