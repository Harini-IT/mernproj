const  mongoose  = require("mongoose");

mongoose.connect('mongodb://127.0.0.1:27017/project')
const UserModel=mongoose.model("User",new mongoose.Schema({

    fname:{type :String,required:true},
    lname:{type:String,required:true},
    uname:{type:String,required:true,unique:true},
    email:{type:String,required:true},
    password:{type:String,required:true},
    role:{type:String,default:'user'}
   
}));

module.exports=UserModel;