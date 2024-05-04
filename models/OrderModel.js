const mongoose=require("mongoose");
const OrderSchema =new mongoose.Schema({
    user:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User"
    },
    products: [
        {
          type: mongoose.Schema.Types.ObjectId,
          ref: "products"
        }
      ]
});
const OrderModel = mongoose.model("order",OrderSchema);
module.exports=OrderModel;