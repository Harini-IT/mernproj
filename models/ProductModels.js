const { default: mongoose } = require("mongoose");
mongoose.connect('mongodb://127.0.0.1:27017/project')
const ProductModels=mongoose.model("products",new mongoose.Schema({
  
    title:{type :String},
    subtitle:{type:String,required:true},

    price:{type:Number,default:0},
    category:{type:String,required:true}
   
}));
module.exports=ProductModels;