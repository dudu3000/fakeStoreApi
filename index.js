const express = require('express');
const app = express();
const UserErrorHandler = require('./errorHandler/UserErrorHandler');
const ProductErrorHandler = require('./errorHandler/ProductErrorHandler');
const CartErrorHandler = require('./errorHandler/CartErrorHandler');
app.use(express.json());


require('dotenv').config();

const user = require('./controller/UserController.js');
const product = require('./controller/ProductController.js');
const cart = require('./controller/CartController.js');


app.use('/user', user);
app.use('/product', product);
app.use('/cart', cart);

app.use(function(err, req, res, next){
    if(err instanceof UserErrorHandler){
        res.status(err.code).send({error: err.message});
    }
    if(err instanceof ProductErrorHandler){
        res.status(err.code).send({error: err.message});
    }
    if(err instanceof CartErrorHandler){
        res.status(err.code).send({error: err.message});
    }
});

app.listen(process.env.SV_PORT, process.env.SV_HOST.replace("http://", ""), () => console.log(`Running on ${process.env.SV_HOST}:${process.env.SV_PORT}`));