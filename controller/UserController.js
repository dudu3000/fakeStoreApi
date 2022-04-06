const express = require('express');
const axios = require('axios');
const utils = require('./utils/UserUtils');
const UserErrorHandler = require('../errorHandler/UserErrorHandler');
const router = express.Router({
    mergeParams: true
});












/**
 * @method POST
 * @param {string} username
 * @param {string} password
 * @param {integer} limit
 * @param {string} sort
 */
router.post('/all', async(req, res, next) => {
    try{
        let limit = req.query.limit, sort = req.query.sort;
        limit = limit < 1 ? undefined : limit;
        sort = sort != "desc" ? undefined : sort;
        
        //Handling bad cases
        if(utils.loginCheckParameters(req.body)){
            throw new UserErrorHandler("Missing parameters!", 400);
        }
        if(utils.adminCheck(req.body.username, req.body.password)){
            throw new UserErrorHandler("Invalid username or password!", 403)
        }
        
        //Get all users based on parameters
        let users;
        await axios.get(`https://fakestoreapi.com/users${(typeof limit != 'undefined' ? "?" : typeof sort != 'undefined' ? "?" : "")}${(typeof limit != "undefined" ? (typeof sort != 'undefined' ? `limit=${limit}&` : `limit=${limit}`) : "")}${(typeof sort != 'undefined' ? `sort=${sort}` : "")}`)
        .then(res => {
            users = res.data;
        }).catch(err => {
            throw new Error();
        });
        res.status(200).send(users);
    }catch(err){
        if(err instanceof UserErrorHandler) next(err, req, res, next);
        else res.status(500).send("Internal error");
    }
});












/**
 * @method POST
 * @param {string} token
 * 
 * @returns {jsonObject} profile
 */
router.post('/profile', async(req, res, next) => {
    try{
        //Handling bad cases
        if(utils.checkToken(req.body)){
            throw new UserErrorHandler("Token missing or invalid!", 403);
        }

        //Get profile
        let profile, userID;
        userID = utils.getUserID(req.body.token, profile=true);
        await axios.get(`https://fakestoreapi.com/users/${userID}`)
        .then(res => {
            profile = res.data;
        }).catch(err => {
            throw new Error();
        });
        res.status(200).send(profile);
    }catch(err){
        if(err instanceof UserErrorHandler) next(err, req, res, next);
        else res.status(500).send("Internal error");
    }
});












/**
 * @method PUT
 * @param {string} email
 * @param {string} username
 * @param {string} password
 * @param {jsonObject} name
 * @param {string} name.firstname
 * @param {string} name.lastname
 * @param {jsonObject} address
 * @param {string} address.city
 * @param {string} address.street
 * @param {integer} address.number
 * @param {string} address.zipcode
 * @param {jsonObject} address.geolocation
 * @param {flaot} address.geolocation.lat
 * @param {flaot} address.geolocation.long
 * @param {string} phone
 * 
 * @returns {jsonObject} newUser
 */
router.put('/', async(req, res, next) => {
    try{
        //Handling bad cases
        if(utils.checkParams(req.body)){
            throw new UserErrorHandler("Missing parameters!", 400);
        }
        if(utils.registerCheckOverlaps(req.body)){
            throw new UserErrorHandler("Email or username already exists!", 403);
        }

        //Push new user to database and return the object of the new user
        let newUser;
        await axios.post('https://fakestoreapi.com/users', {
            email: req.body.email,
            username: req.body.username,
            password: req.body.password,
            name:{
                firstname: req.body.name.firstname,
                lastname: req.body.name.lastname
            },
            address:{
                city: req.body.address.city,
                street: req.body.address.street,
                number: req.body.address.number,
                zipcode: req.body.address.zipcode,
                geolocation:{
                    lat: req.body.address.geolocation.lat,
                    long: req.body.address.geolocation.long
                }
            },
            phone: req.body.phone
        }).then(res => {
            newUser = res.data;
        }).catch(err => {
            throw new Error();
        });
        newUser = utils.addUser(newUser);
        res.status(200).send(newUser);
    }catch(err){
        if(err instanceof UserErrorHandler) next(err, req, res, next);
        else res.status(500).send("Internal error");
    }
});












/**
 * @method PATCH
 * @param {string} token
 * @param {string} email
 * @param {string} username
 * @param {string} password
 * @param {jsonObject} name
 * @param {string} name.firstname
 * @param {string} name.lastname
 * @param {jsonObject} address
 * @param {string} address.city
 * @param {string} address.street
 * @param {integer} address.number
 * @param {string} address.zipcode
 * @param {jsonObject} address.geolocation
 * @param {flaot} address.geolocation.lat
 * @param {flaot} address.geolocation.long
 * @param {string} phone
 * 
 * @returns {jsonObject} updatedUser
 */
router.patch('/', async(req, res, next) => {
    try{
        //Handling bad cases
        if(utils.checkToken(req.body)){
            throw new UserErrorHandler("Token missing or invalid!", 403);
        }
        if(utils.checkParams(req.body)){
            throw new UserErrorHandler("Missing parameters!", 400);
        }
        //Update user
        let userID = utils.getUserID(req.body.token, profile=false, update=true);
        let user = utils.updateUser(userID, req.body);
        let updatedUser;
        await axios.patch(`https://fakestoreapi.com/users/${userID}`, user)
        .then(res => {
            updatedUser = res.data;
        }).catch(err => {
            throw new Error();
        });
        res.status(200).send(updatedUser);
    }catch(err){
        if(err instanceof UserErrorHandler) next(err, req, res, next);
        else res.status(500).send("Internal error");
    }
})












/**
 * @method DELETE
 * @param {string} token
 * 
 * @returns {jsonObject} deletedUser
 */
router.delete('/', async(req, res, next) => {
    try{
        //Handling bad cases
        if(utils.checkToken(req.body)){
            throw new UserErrorHandler("Token missing or invalid!", 403);
        }

        //Delete user
        let userID = utils.getUserID(req.body.token, profile=false, update=false, del=true);
        utils.deleteUser(userID);
        let deletedUser;
        await axios.delete(`https://fakestoreapi.com/users/${userID}`)
        .then(res => {
            deletedUser = res.data;
        }).catch(err => {
            throw new Error();
        });
        res.status(200).send(deletedUser);
    }catch(err){
        if(err instanceof UserErrorHandler) next(err, req, res, next);
        else res.status(500).send("Internal error");
    }
})












/**
 * @method POST
 * @param {string} username
 * @param {string} password
 * 
 * @returns {string} token
 */
router.post('/login', async(req, res, next) => {
    try{
        //Handling bad cases
        if(utils.loginCheckParameters(req.body)){
            throw new UserErrorHandler("Missing parameters!", 400);
        }
        if(utils.loginCheckCredentials(req.body)){
            throw new UserErrorHandler("Invalid username or password!", 403);
        }

        //Get token
        let token;
        await axios.post('https://fakestoreapi.com/auth/login', {
            username: req.body.username,
            password: req.body.password
        }).then(res => {
            token = res.data.token
        }).catch(err => {
            throw new Error();
        });
        res.status(200).send({token: token});
    }catch(err){
        if(err instanceof UserErrorHandler) next(err, req, res, next);
        else res.status(500).send("Internal error");
    }
});


module.exports = router;