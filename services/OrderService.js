const mongoose=require('mongoose')
const OrderModel = require('../models/OrderModel');
const UserService=require('./UserService')
const OrderService={
   getKartByUname:async(uname)=>{
   var id=await UserService.getIdByUname(uname);
   console.log("id="+id);
    var order=await OrderModel.find({user:id});
    console.log("order",order);
    return order;

   },
   placeorder:async(pid,uid)=>{
      var odoc=await OrderModel.create({product:pid,user:uid})
      return odoc;
   }
}
module.exports=OrderService;
