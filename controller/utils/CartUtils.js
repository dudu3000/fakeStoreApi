
const axios = require('axios');
/**
 * Verify token
 * @param {jsonObject} body 
 * 
 * @returns if token not verified true else false
 */
function checkToken(body){
    if(mockTokenVerification(body.token)){
        return true;
    }
    return false;
}

/**
 * Mocks verification of token against the algorithm
 * @param {string} token 
 * 
 * @returns if token !match true else false
 */
function mockTokenVerification(token){
    if(token != "eyJr389hbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9"){
        return true;
    }
    return false;
}
/**
 * Checks if it is admin account
 * @param {stirng} username 
 * @param {string} password 
 * 
 * @returns if account == admin false else true
 */
function adminCheck(token){
    role = getTokenInfo(token);
    if(role == "admin") return false;
    return true;
}

/**
 * Mocks token verification and obtaining information from token
 * @param {stirng} token 
 * 
 * @returns {stirng} role
 */
function getTokenInfo(token){
    role = "admin";
    return role
}

/**
 * Returns cartID for specific user based on fakestoreapi's examples
 * @param {string} token 
 * 
 * @returns if getOwnCArt 1
 */
function getUserID(token){
    return 2;
}

/**
 * @param {string} startdate
 * @param {string} enddate
 * 
 * @returns if startdate > enddate true else false
 */
function checkDateRange(startdate, enddate){
    if(Number(startdate.substring(0, 4)) > Number(enddate.substring(0, 4))){
        return true;
    }else if(Number(startdate.substring(0, 4)) == Number(enddate.substring(0, 4))){
        if(Number(startdate.substring(5, 7)) > Number(enddate.substring(5, 7))){
            return true;
        }else if(Number(startdate.substring(5, 7)) == Number(enddate.substring(5, 7))){
            if(Number(startdate.substring(8, 10)) >= Number(enddate.substring(8, 10))){
                return true;
            }
        }
    }
    return false;
}


/**
 * 
 * @param {jsonObject} body 
 * 
 * @returns if parameters missing true else false
 */
function checkCreateParameters(body){
    if(typeof body.token == 'undefined' || !Array.isArray(body.products)){
        return true;
    }
    for(let product of body.products){
        if(typeof product.productId == 'undefined' || typeof product.quantity == 'undefined'){
            return true;
        }
    }
    return false;
}

 module.exports = {
    adminCheck: function(token){
        return adminCheck(token);
    },
    checkToken: function(body){
        return checkToken(body);
    },
    getUserID: function(token){
        return getUserID(token);
    },
    checkDateRange: function(startdate, enddate){
        return checkDateRange(startdate, enddate);
    },
    checkCreateParameters: function(body){
        return checkCreateParameters(body);
    }
}