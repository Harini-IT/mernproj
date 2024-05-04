
var express = require('express');
var bodyParser = require('body-parser');
var jsonBodyParser = bodyParser.json();
var app = express();
var cors = require('cors');
const products = require('./products');
app.use(cors());
app.use(jsonBodyParser);
//getting
app.get('/products',function(req,res){
    res.json(products);
    
});
app.get('/products/:animal',function(req,res){
    const animal=req.params["animal"]
    res.json(products);
    
});
//adding
app.post('/products',function(req,res){
    var user = req.body;
    products.push(user);
    res.json(user);
   
} );
//updating
app.put('/products/:animal/:id',function(req,res){
    const id = req.params["id"];
    var chUser = null;
    var {title,subtitle,price} = req.body;
    for(let i=0;i<products.length;i++){
        if (products[i].id ==id){
            if(title)
             products[i].title = title;
            if(subtitle)
             products[i].subtitle = subtitle;
            if(price)
                products[i].price=price;  
        chUser = products[i];
        break;
        }
    }
    res.json(chUser);
});
 
app.delete('/products/:animal/:id',function(req,res){
    const id = req.params["id"];
    products = products.filter((el)=>el.id!=id)
    res.send("deleted :"+req.params["id"]);
});



var server = app.listen(8083,function(){
    var host = server.address().address;
    var port = server.address().port;
    console.log("Example listening");
})