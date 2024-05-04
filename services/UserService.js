
const UserModel = require('../models/UserModel')
const mongoose = require('mongoose')
mongoose.connect('mongodb://127.0.0.1:27017/project')
const UserService={

    signUp:async(user)=>{

        var pdoc=await UserModel.create(user);
        // mongoose.connection.close()
        return pdoc
    },
    login: async (u, p) => {
        
        var user = await UserModel.findOne({ uname: u ,password:p});
        console.log(u,p);
        console.log(user);
        console.log(user);
        return user;
      },
      changePassword:async(unm,passwd)=>{
       var user=await UserModel.findOneAndUpdate({uname:unm},{password:passwd},{new:true,useFindAndModify:false})
     return user
    },
    removeUser:async(uid)=>{
   var data =await UserModel.findByIdAndDelete(uid)
        return data;
},
getIdByUname:async(uname)=>{
    console.log("uname inside uservice"+uname)
    var data =await UserModel.findOne({uname:uname})
    console.log("data=",data);
        return data._id;
 
}
}
module.exports=UserService;