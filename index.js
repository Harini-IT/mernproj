const bodyParser = require("body-parser");
const cors = require("cors");
const mongoose=require("mongoose")
const express = require("express");
const UserRouter = require("./router/UserRouter");
const ProductRouter = require("./router/productRouter");
const OrderRouter = require("./router/OrderRouter");

const app = express();
app.use(bodyParser.json());
app.use(cors());
app.use(UserRouter);
app.use(ProductRouter);
app.use(OrderRouter)
mongoose.connect('mongodb://127.0.0.1:27017/project')

app.listen(8082,()=>{
    console.log("Server started!!!")
});