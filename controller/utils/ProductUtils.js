
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
 * Checks parameters for adding product request
 * @param {jsonObject} body 
 * 
 * @returns if missingParamerer true else false
 */
function checkParams(body){
    if(typeof body.token == 'undefined' || typeof body.title == 'undefined' || typeof body.price == 'undefined' || typeof body.description == 'undefined' || typeof body.image == 'undefined' || typeof body.category == 'undefined'){
        return true;
    }
    return false;
}

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

module.exports = {
    adminCheck: function(username, password){
        return adminCheck(username, password);
    },
    checkAddingParams: function(body){
        return checkAddingParams(body);
    },
    checkParams: function(body){
        return checkParams(body);
    },
    checkToken: function(body){
        return checkToken(body);
    }
}