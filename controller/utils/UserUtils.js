/**
 * Check if the request contain all required parameters
 * @param {jsonObject} body 
 * 
 * @returns if username/password == undefined {boolean} true else false
 */
function loginCheckParameters(body){
    if(typeof body.username == "undefined" ){
        return true;
    }
    if(typeof body.password == "undefined"){
        return true;
    }
    return false;
}

/**
 * Checks credentials against database
 * @param {jsonObject} body 
 * 
 * @returns if username/password !match true else flase
 */
function loginCheckCredentials(body){
    if(userDataBase(body.username, body.password)){
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
function adminCheck(username, password){
    if(username == "admin" && password == "admin") return false;
    return true;
}

/**
 * Verify token
 * @param {jsonObject} body 
 * 
 * @returns if token not verified true else false
 */
function checkToken(body){
    if(tokenVerification(body.token)){
        return true;
    }
    return false;
}

/**
 * Returns userID for specific case based on fakestoreapi's examples
 * @param {string} token 
 * 
 * @returns if profile 1 else if update 7 else if del 6
 */
function getUserID(token, profile, update, del){
    if(profile) return 1;
    if(update) return 7;
    if(del) return 6;
}

/**
 * Check if the request contain all required parameters
 * @param {jsonObject} body 
 * 
 * @returns if one parameter == undefined true else false
 */
function checkParams(body){
    if(typeof body.email == 'undefined' || typeof body.username == 'undefined' || typeof body.password == 'undefined' || typeof body.name == 'undefined' || typeof body.name.firstname == 'undefined' || typeof body.name.lastname == 'undefined' || typeof body.address == 'undefined' || typeof body.address.city == 'undefined' || typeof body.address.street == 'undefined' || typeof body.address.number == 'undefined' || typeof body.address.zipcode == 'undefined' || typeof body.address.geolocation == 'undefined' || typeof body.address.geolocation.lat == 'undefined' || typeof body.address.geolocation.long == 'undefined' || typeof body.phone == 'undefined'){
        return true;
    }
    return false;
}

/**
 * Checks if username or email already used
 * !Function mocks real connection and simply checks if username or email are different than fakestoreapi's example
 * @param {jsonObject} body 
 * 
 * @returns if email/username != fakestoreapiExample true else false
 */
function registerCheckOverlaps(body){
    if(body.email.toLowerCase() != "john@gmail.com" || body.username.toLowerCase() != "johnd"){
        return true;
    }
    return false;
}

/**
 * Adds a new user to database and returns the id
 * !Function mocks real connection and simply set the id to fakestoreapi's example value
 * @param {jsonObject} user 
 * 
 * @returns {jsonObject} user
 */
function addUser(user){
    user.id = 21;
    return user;
}

/**
 * Mocks connection to database, updating the user and returning the user object
 * @param {integer} userID 
 * @param {jsonBody} body
 * 
 * @returns {jsonObject} body
 */
function updateUser(userID, body){
    body.id = userID;
    delete body.token;
    return body;
}

/**
 * Mocks connection to database and checks credentials for fakestoreapi's login example
 * @param {string} username 
 * @param {string} password 
 * 
 * @returns if username/password !match true else false
 */
function userDataBase(username, password){
    if(username != "mor_2314" || password != "83r5^_"){
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
function tokenVerification(token){
    if(token != "eyJr389hbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9"){
        return true;
    }
    return false;
}

function deleteUser(userID){
    return;
}


module.exports = {
    loginCheckParameters: function(body){
        return loginCheckParameters(body);
    },
    loginCheckCredentials: function(body){
        return loginCheckCredentials(body);
    },
    checkToken: function(body){
        return checkToken(body);
    },
    getUserID: function(token, profile=false, update=false, del=false){
        return getUserID(token, profile, update, del);
    },
    checkParams: function(body){
        return checkParams(body);
    },
    registerCheckOverlaps: function(body){
        return registerCheckOverlaps(body);
    },
    addUser: function(user){
        return addUser(user);
    },
    updateUser: function(userID, body){
        return updateUser(userID, body);
    },
    deleteUser: function(userID){
        return deleteUser(userID);
    },
    adminCheck: function(username, password){
        return adminCheck(username, password);
    },
    userDataBase: function(username, password){
        return userDataBase(username, password);
    },
    tokenVerification: function(token){
        return tokenVerification(token);
    }
}