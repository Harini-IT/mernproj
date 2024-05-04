const express=require("express");

const ProductServices = require("../services/ProductServices");
const ProductRouter = express.Router();
const authenticate_user = require("../authenticate_user");
const authenticate_admin=require("../authenticate_admin")

ProductRouter.get("/product/:categ", async(req, res) => {
    var { categ} = req.params;
    var products = await ProductServices.getByCategory(categ);
    res.json(products);
  });
ProductRouter.post("/product",authenticate_admin,async(req,res)=>{
    var prod =req.body;
    var newprod=await ProductServices.addProduct(prod)
    res.json(newprod);
    res.send("Here I will add prdocts");
  });


  ProductRouter.delete('/product/:pid',authenticate_admin,async (req,res)=>{
    var {pid}=req.params;
    var products=await ProductServices.removeProduct(pid);
    res.json(products);
  });
  ProductRouter.put('/product/:pid',authenticate_admin,async function (req, res) {
    var {pid} = req.params;
    var body=req.body;
    await ProductServices.updateProduct(pid,body)
    res.json("Updated");
});
ProductRouter.get('/product',async function(req,res){
  var product=await ProductServices.getAllProduct(product)
  res.json(product);

});
ProductRouter.get('/product/:title',async function(req,res){
    var {title}=req.params;
    var p_products=await ProductServices.getByTitle(title)
    res.json(p_products);
});
ProductRouter.get('/product/:pid',authenticate_user,async (req,res)=>{
  var {pid}=req.params;
  var product=await ProductServices.getByid(pid);
  res.json(product);
});



module.exports= ProductRouter;
 
