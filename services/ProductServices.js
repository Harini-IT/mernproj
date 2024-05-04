const mongoose=require('mongoose')
const ProductModels = require('../models/ProductModels')
mongoose.connect('mongodb://127.0.0.1:27017/project')
const ProductServices ={
 addProduct:async(product)=>{
   var pDoc =await ProductModels.create( product)
   return pDoc;
},
removeProduct:async(pid)=>{
   var data =await ProductModels.findByIdAndDelete(pid)
   return data;
 },
getByCategory:async(catogeryValue)=>{
   var products=await ProductModels.find({category:catogeryValue})
   return products;
},

updateProduct:async(prod,body)=>{
        console.log(body)
        if(body.title){
            await ProductModels.findByIdAndUpdate(
                prod,
                {productname:body.productname}
            )
        }
        if(body.category){
            await ProductModels.findByIdAndUpdate(
                prod,
                {brand:body.category}
            )
        }
        if(body.price){
            await ProductModels.findByIdAndUpdate(
                prod,
                {price:body.price}
            )
        }
    },
    getAllProduct:async(p)=>{
        var product=await ProductModels.find({p})
        return product;
    },
    getByTitle:async(titlen)=>{
        var products=await ProductModels.find({title:titlen})
        return products;
       },
       getByid:async(prod_id)=>{
        var products=await ProductModels.find({id:prod_id})
        return products;
     }

}
module.exports=ProductServices;