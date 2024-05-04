const express=require("express");
const UserService = require("../services/UserService");

const UserRouter = express.Router();
 
UserRouter.post('/user', async function (req, res) {
     var user = req.body;
     var newuser=await UserService.signUp(user)
     res.json(newuser);
});

UserRouter.post("/user/login", async (req, res) => {
  var { uname,password } = req.body;
  var user = await UserService.login(uname,password);
  if(user!=null)
      res.send(user.uname+":"+user.password+":"+user.role);
  else
      res.send("invalid");
});

UserRouter.put('/user/changepassword',async function(req,res){
    var {uname,password}=req.body
    res.json(await UserService.changePassword(uname,password))
});
UserRouter.delete('/user/:uid',async (req,res)=>{
    var {uid}=req.params;
    var user=await UserService.removeUser(uid);
    res.json(user);
})
module.exports= UserRouter;