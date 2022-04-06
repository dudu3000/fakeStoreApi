const express = require('express');
const axios = require('axios');
const utils = require('./utils/CartUtils');
const CartErrorHandler = require('../errorHandler/CartErrorHandler');
const router = express.Router({
    mergeParams: true
});









/**
 * @method POST
 * @param {string} token
 * @param {integer} limit
 * @param {string} sort
 * @param {string[yyyy-mm-dd]} startdate
 * @param {string[yyyy-mm-dd]} enddate
 * 
 * @returns {jsonObject} carts
 */
router.post('/all', async(req, res, next) => {
    try{
        let limit = req.query.limit, sort = req.query.sort, startdate = req.query.startdate, enddate = req.query.enddate, carts;
        //Handle bad cases
        if(utils.checkToken(req.body)){
            throw new CartErrorHandler("Invalid token", 403);
        }
        if(utils.adminCheck(req.body.username, req.body.password)){
            throw new CartErrorHandler("Permission denied!", 403);
        }
        if(utils.checkDateRange(startdate, enddate)){
            throw new CartErrorHandler("Invalid date range!", 400);
        }


        //Get all carts based on parameters
        limit = limit < 1 ? undefined : limit;
        sort = sort != "desc" ? undefined : sort;
        //Remove feature if one of the dates is missing
        if(typeof startdate == 'undefined' || typeof enddate == 'undefined'){
            startdate == undefined;
            enddate == undefined;
        }

        //Build request based on given parameters
        const parameters = typeof limit != 'undefined' || typeof sort != 'undefined' || typeof startdate != 'undefined' ? "?" : "";
        const limitParam = typeof limit != 'undefined' ? `limit=${limit}` : "";
        const sortParam = typeof sort != 'undefined' ? (typeof limit != 'undeefined' ? `&sort=${sort}` : `sort=${sort}`) : "";
        const dateParam = typeof startdate != 'undefined' ? (typeof limit != 'undefined' || typeof sort != 'undefined' ? `&startdate=${startdate}&enddate=${enddate}` : `startdate=${startdate}&enddate=${enddate}`) : "";
        await axios.get(`https://fakestoreapi.com/carts${parameters}${limitParam}${sortParam}${dateParam}`)
        .then(res => {
            carts = res.data;
        }).catch(err => {
            throw new Error();
        });
        res.status(200).send(carts);
    }catch(err){
        if(err instanceof CartErrorHandler) next(err, req, res, next);
        else res.status(500).send("Internal error");
    }
});










/**
 * @method POST
 * @param {string} token
 * @param {integer} id
 * 
 * @returns {jsonObject} cart
 */
router.post('/:id', async(req, res, next) => {
    try{
        let cartID = req.params.id, cart;
        //Handling bad cases
        if(utils.checkToken(req.body)){
            throw new CartErrorHandler("Invalid token", 403);
        }
        if(utils.adminCheck(req.body.username, req.body.password)){
            throw new CartErrorHandler("Permission denied!", 403);
        }

        //Get profile
        await axios.get(`https://fakestoreapi.com/carts/${cartID}`)
        .then(res => {
            cart = res.data;
        }).catch(err => {
            throw new Error();
        });
        res.status(200).send(cart);
    }catch(err){
        if(err instanceof CartErrorHandler) next(err, req, res, next);
        else res.status(500).send("Internal error");
    }
});











/**
 * @method POST
 * @param {string} token
 * 
 * @returns {jsonObject} userCarts
 */
router.post('/', async(req, res, next) => {
    try{
        //Handling bad cases
        if(utils.checkToken(req.body)){
            throw new CartErrorHandler("Invalid token", 403);
        }

        //Get profile
        let userCarts, userID;
        userID = utils.getUserID(req.body.token);
        await axios.get(`https://fakestoreapi.com/carts/user/${userID}`)
        .then(res => {
            userCarts = res.data;
        }).catch(err => {
            throw new Error();
        });
        res.status(200).send(userCarts);
    }catch(err){
        if(err instanceof CartErrorHandler) next(err, req, res, next);
        else res.status(500).send("Internal error");
    }
});










/**
 * @method PUT
 * @param {string} token
 * @param {list<jsonObject>} products
 * 
 * @returns {jsonObject} newCart
 */
router.put('/', async(req, res, next) => {
    try{
        //Handling bad cases
        if(utils.checkToken(req.body)){
            throw new CartErrorHandler("Invalid token", 403);
        }
        if(utils.checkCreateParameters(req.body)){
            throw new CartErrorHandler("Missing parameters!", 400);
        }

        //Get profile
        let newCart, userID, currentDate, products = req.body.products;
        userID = utils.getUserID(req.body.token);
        currentDate = new Date().toISOString().split("T")[0];
        await axios.post(`https://fakestoreapi.com/carts`, {
            userId: userID,
            date: currentDate,
            products: products
        })
        .then(res => {
            newCart = res.data;
        }).catch(err => {
            throw new Error();
        });
        res.status(200).send(newCart);
    }catch(err){
        if(err instanceof CartErrorHandler) next(err, req, res, next);
        else res.status(500).send("Internal error");
    }
});










/**
 * @method PATCH
 * @param {string} token
 * @param {integer} id
 * @param {list<jsonObject>} products
 * 
 * @returns {jsonObject} updatedCart
 */
router.patch('/:id', async(req, res, next) => {
    try{
        let updatedCart, userID, currentDate, products = req.body.products, cartID = req.params.id, userCarts = [];
        userID = utils.getUserID(req.body.token);
        //Handling bad cases
        await axios.post(`${process.env.SV_HOST}:${process.env.SV_PORT}/cart`, {
            token: req.body.token
        }).then(res => {
            for(let cart of res.data){
                userCarts.push(cart.id);
            }
        }).catch(err => {
            throw new Error();
        });
        if(!userCarts.includes(Number(cartID))){
            throw new CartErrorHandler("Invalid cart id!", 404);
        }
        if(utils.checkToken(req.body)){
            throw new CartErrorHandler("Invalid token", 403);
        }
        if(utils.checkCreateParameters(req.body)){
            throw new CartErrorHandler("Missing parameters!", 400);
        }

        //Get profile
        currentDate = new Date().toISOString().split("T")[0];
        await axios.patch(`https://fakestoreapi.com/carts/${cartID}`, {
            userId: userID,
            date: currentDate,
            products: products
        })
        .then(res => {
            updatedCart = res.data;
        }).catch(err => {
            throw new Error();
        });
        res.status(200).send(updatedCart);
    }catch(err){
        if(err instanceof CartErrorHandler) next(err, req, res, next);
        else res.status(500).send("Internal error");
    }
});










/**
 * @method DELETE
 * @param {string} token
 * @param {integer} id
 * 
 * @returns {jsonObject} deletedCart
 */
router.delete('/:id', async(req, res, next) => {
    try{
        let deletedCart, userID, cartID = req.params.id, userCarts = [];
        userID = utils.getUserID(req.body.token);
        //Handling bad cases
        if(utils.checkToken(req.body)){
            throw new CartErrorHandler("Invalid token", 403);
        }
        await axios.post(`${process.env.SV_HOST}:${process.env.SV_PORT}/cart`, {
            token: req.body.token
        }).then(res => {
            for(let cart of res.data){
                userCarts.push(cart.id);
            }
        }).catch(err => {
            throw new Error();
        });
        if(!userCarts.includes(Number(cartID))){
            throw new CartErrorHandler("Invalid cart id!", 404);
        }

        //Get profile
        await axios.delete(`https://fakestoreapi.com/carts/${cartID}`)
        .then(res => {
            deletedCart = res.data;
        }).catch(err => {
            throw new Error();
        });
        res.status(200).send(deletedCart);
    }catch(err){
        if(err instanceof CartErrorHandler) next(err, req, res, next);
        else res.status(500).send("Internal error");
    }
});

module.exports = router;