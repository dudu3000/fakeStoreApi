const express = require('express');
const axios = require('axios');
const utils = require('./utils/ProductUtils');
const ProductErrorHandler = require('../errorHandler/ProductErrorHandler');
const router = express.Router({
    mergeParams: true
});










/**
 * @method GET
 * @param {integer} limit
 * @param {string} sort
 */
router.get('/all', async(req, res, next) => {
    try{
        let limit = req.query.limit, sort = req.query.sort;
        limit = limit < 1 ? undefined : limit;
        sort = sort != "desc" ? undefined : sort;
        
        //Get all products based on parameters
        let products;
        await axios.get(`https://fakestoreapi.com/products${(typeof limit != 'undefined' ? "?" : typeof sort != 'undefined' ? "?" : "")}${(typeof limit != "undefined" ? (typeof sort != 'undefined' ? `limit=${limit}&` : `limit=${limit}`) : "")}${(typeof sort != 'undefined' ? `sort=${sort}` : "")}`)
        .then(res => {
            products = res.data;
        }).catch(err => {
            throw new Error();
        });
        res.status(200).send(products);
    }catch(err){
        if(err instanceof ProductErrorHandler) next(err, req, res, next);
        else res.status(500).send("Internal error");
    }
});










/**
 * @method GET
 * @param {integer} id
 */
router.get('/', async(req, res, next) => {
    try{
        let productID = req.query.id;
        //Handle bad cases
        if(!Number.isInteger(productID) && !(productID > 0)){
            throw new ProductErrorHandler("Product not found", 404);
        }
        
        //Get product based on the productID
        let product;
        await axios.get(`https://fakestoreapi.com/products/${productID}`)
        .then(res => {
            product = res.data;
        }).catch(err => {
            throw new Error();
        });
        res.status(200).send(product);
    }catch(err){
        if(err instanceof ProductErrorHandler) next(err, req, res, next);
        else res.status(500).send("Internal error");
    }
});










/**
 * @method GET
 */
router.get('/categories', async(req, res, next) => {
    try{
        //Get product based on the productID
        let categories;
        await axios.get(`https://fakestoreapi.com/products/categories`)
        .then(res => {
            categories = res.data;
        }).catch(err => {
            throw new Error();
        });
        res.status(200).send(categories);
    }catch(err){
        if(err instanceof ProductErrorHandler) next(err, req, res, next);
        else res.status(500).send("Internal error");
    }
});









/**
 * @method GET
 * @param {string} category
 * @param {integer} limit
 * @param {string} sort
 */
router.get('/:category', async(req, res, next) => {
    try{
        let category = req.params.category, categories;
        await axios.get(`https://fakestoreapi.com/products/categories`)
        .then(res => {
            categories = res.data;
        });
        if(!categories.includes(category)){
            throw new ProductErrorHandler("Category not found!", 404);
        }


        
        let limit = req.query.limit, sort = req.query.sort;
        limit = limit < 1 ? undefined : limit;
        sort = sort != "desc" ? undefined : sort;
        
        //Get all products based on parameters
        let products;
        await axios.get(`https://fakestoreapi.com/products/category/${category}${(typeof limit != 'undefined' ? "?" : typeof sort != 'undefined' ? "?" : "")}${(typeof limit != "undefined" ? (typeof sort != 'undefined' ? `limit=${limit}&` : `limit=${limit}`) : "")}${(typeof sort != 'undefined' ? `sort=${sort}` : "")}`)
        .then(res => {
            products = res.data;
        }).catch(err => {
            throw new Error();
        });
        res.status(200).send(products);
    }catch(err){
        if(err instanceof ProductErrorHandler) next(err, req, res, next);
        else res.status(500).send("Internal error");
    }

})










/**
 * @method POST
 * @param {string} token
 * @param {flaot} price
 * @param {string} description
 * @param {string} image
 * @param {stirng} category
 * 
 * @returns {jsonObject} newProduct
 */
router.post('/add', async(req, res, next) => {
    try{
        let categories;
        //Handle bad cases
        if(utils.checkParams(req.body)){
            throw new ProductErrorHandler("Missing parameters!", 400);
        }
        if(utils.checkToken(req.body)){
            throw new ProductErrorHandler("Invalid token", 403);
        }
        if(utils.adminCheck(req.body.username, req.body.password)){
            throw new ProductErrorHandler("Permission denied!", 403);
        }
        await axios.get(`https://fakestoreapi.com/products/categories`)
        .then(res => {
            categories = res.data;
        }).catch(err => {
            throw new Error();
        });
        if(!categories.includes(req.body.category)){
            throw new ProductErrorHandler("Category not found!", 404);
        }

        //Add new product
        let newProduct;
        await axios.post(`https://fakestoreapi.com/products`, {
            title: req.body.title,
            price: req.body.price,
            description: req.body.description,
            image: req.body.image,
            category: req.body.category
        }).then(res => {
            newProduct = res.data;
        }).catch(err => {
            throw new Error();
        });
        res.status(200).send(newProduct)
    }catch(err){
        if(err instanceof ProductErrorHandler) next(err, req, res, next);
        else res.status(500).send("Internal error");
    }
})










/**
 * @method POST
 * @param {string} token
 * @param {integer} id
 * 
 * @returns {jsonObject} deletedProduct
 */
router.delete('/:id', async(req, res, next) => {
    try{
        //Handle bad cases
        if(!Number.isInteger(req.params.id) && !(req.params.id > 0)){
            throw new ProductErrorHandler("Invalid product id!", 404);
        }
        if(utils.checkToken(req.body)){
            throw new ProductErrorHandler("Invalid token", 403);
        }
        if(utils.adminCheck(req.body.username, req.body.password)){
            throw new ProductErrorHandler("Permission denied!", 403);
        }

        //Add new product
        let deletedProduct;
        await axios.delete(`https://fakestoreapi.com/products/${req.params.id}`)
        .then(res => {
            deletedProduct = res.data;
        }).catch(err => {
            throw new Error();
        });
        res.status(200).send(deletedProduct)
    }catch(err){
        if(err instanceof ProductErrorHandler) next(err, req, res, next);
        else res.status(500).send("Internal error");
    }
})









/**
 * @method PATCH
 * @param {string} token
 * @param {integer} id
 * @param {flaot} price
 * @param {string} description
 * @param {string} image
 * @param {stirng} category
 * 
 * @returns {jsonObject} updatedProduct
 */
router.patch('/:id', async(req, res, next) => {
    try{
        let productID = req.params.id, categories;
        //Handling bad cases
        if(utils.checkToken(req.body)){
            throw new ProductErrorHandler("Invalid token", 403);
        }
        if(utils.adminCheck(req.body.username, req.body.password)){
            throw new ProductErrorHandler("Permission denied!", 403);
        }
        await axios.get(`https://fakestoreapi.com/products/categories`)
        .then(res => {
            categories = res.data;
        }).catch(err => {
            throw new Error();
        });
        if(!categories.includes(req.body.category)){
            throw new ProductErrorHandler("Category not found!", 404);
        }
        delete req.body.token


        //Update user
        let updatedProduct;
        await axios.patch(`https://fakestoreapi.com/products/${productID}`, req.body)
        .then(res => {
            updatedProduct = res.data;
        }).catch(err => {
            throw new Error();
        });
        res.status(200).send(updatedProduct);
    }catch(err){
        if(err instanceof ProductErrorHandler) next(err, req, res, next);
        else res.status(500).send("Internal error");
    }
})
module.exports = router;