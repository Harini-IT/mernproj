const mongoose=require('mongoose')
const AddToKartModel=require('../models/AddToKartModel')
const ProductModel=require('../models/ProductModels')

mongoose.connect("mongodb://127.0.0.1:27017/BuyOrSell")

const AddToKartService={
    addToKart:async(uname,model,brand,category)=>{
        var addToKart=await ProductModel.findOne({
            model:model,
            brand:brand,
            category:category
        })
        var addToKart={
            model:addToKart.model,
            brand:addToKart.brand,
            category:addToKart.category,
            ownYear:addToKart.ownYear,
            kilometer:addToKart.kilometer,
            place:addToKart.place,
            cost:addToKart.cost
        }
        var pDoc=await AddToKartModel.create({
            uname:uname,
            addToKart:new Object(addToKart)
        })
        return pDoc
    },
    findAll:async(uname)=>{
        var buy=await AddToKartModel.find({uname:uname})
        return buy
    },
    addToMyKart:async(uname,model,brand,category)=>{
        var newone=await AddToKartModel.findOne({uname:uname})
        var addToKart=await ProductModel.findOne({
            model:model,
            brand:brand,
            category:category
        })
        var addToMyKart={
            model:addToKart.model,
            brand:addToKart.brand,
            category:addToKart.category,
            ownYear:addToKart.ownYear,
            kilometer:addToKart.kilometer,
            place:addToKart.place,
            cost:addToKart.cost
        }
        var pDoc=await AddToKartModel.findOneAndUpdate(
            {uname:uname},
            {
                $push:{
                    addToKart:addToMyKart
                }
            }
        )
    }
}
module.exports=AddToKartService