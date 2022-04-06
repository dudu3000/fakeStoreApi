const utils = require('../controller/utils/UserUtils');

/**
 * -------------------------------------------------------------------------------
 * Test loginCheckParameters
 * -------------------------------------------------------------------------------
 */

/**
 * @param {jsonObject} body{username, password}
 * 
 * @returns {boolean} true 
 */
test('Test loginCheckParameters success', () => {
    const body = {
        username: "test",
        password: "test"
    };
    const result = utils.loginCheckParameters(body);
    expect(result).toBe(false);
});

/**
 * @param {jsonObject} body{username}
 * 
 * @returns {boolean} true 
 */
test('Test loginCheckParameters missing a parameter', () => { 
    const body = {
        username: "test"
    };
    const result = utils.loginCheckParameters(body);
    expect(result).toBe(true);
});

/**
 * @param {string} body
 * 
 * @returns {boolean} true 
 */
test('Test loginCheckParameters wrong data type for `body`', () => { 
    const body = "Test";
    const result = utils.loginCheckParameters(body);
    expect(result).toBe(true);
});










/**
 * -------------------------------------------------------------------------------
 * Test loginCheckCredentials
 * -------------------------------------------------------------------------------
 */

/**
 * @param {jsonObject} body{username, password}
 * 
 * @returns {boolean} false 
 */
test('Test loginCheckCredentials success', () => {
    const body = {
        username: "mor_2314",
        password: "83r5^_"
    };
    const result = utils.loginCheckCredentials(body);
    expect(result).toBe(false);
});

/**
 * @param {jsonObject} body{username, password}
 * 
 * @returns {boolean} true 
 */
test('Test loginCheckCredentials wrong password', () => {
    const body = {
        username: "mor_2314",
        password: "test"
    };
    const result = utils.loginCheckCredentials(body);
    expect(result).toBe(true);
});

/**
 * @param {jsonObject} body{username, password}
 * 
 * @returns {boolean} true 
 */
test('Test loginCheckCredentials wrong username', () => {
    const body = {
        username: "test",
        password: "83r5^_"
    };
    const result = utils.loginCheckCredentials(body);
    expect(result).toBe(true);
});

/**
 * @param {jsonObject} body{username}
 * 
 * @returns {boolean} true 
 */
test('Test loginCheckCredentials missing password parameter', () => {
    const body = {
        username: "test"
    };
    const result = utils.loginCheckCredentials(body);
    expect(result).toBe(true);
});

/**
 * @param {jsonObject} body{password}
 * 
 * @returns {boolean} true 
 */
test('Test loginCheckCredentials missing username parameter', () => {
    const body = {
        password: "83r5^_"
    };
    const result = utils.loginCheckCredentials(body);
    expect(result).toBe(true);
});

/**
 * @param {string} body
 * 
 * @returns {boolean} true 
 */
test('Test loginCheckCredentials wrong data type for `body`', () => {
    const body = "test";
    const result = utils.loginCheckCredentials(body);
    expect(result).toBe(true);
});










/**
 * -------------------------------------------------------------------------------
 * Test adminCheck
 * -------------------------------------------------------------------------------
 */

/**
 * @param {string} username
 * @param {string} password
 * 
 * @returns {boolean} false 
 */
test('Test adminCheck success', () => {
    const username = 'admin';
    const password = 'admin';
    const result = utils.adminCheck(username, password);
    expect(result).toBe(false);
});

/**
 * @param {string} username
 * @param {string} password
 * 
 * @returns {boolean} true 
 */
test('Test adminCheck wrong password', () => {
    const username = 'admin';
    const password = 'test';
    const result = utils.adminCheck(username, password);
    expect(result).toBe(true);
});

/**
 * @param {string} username
 * @param {string} password
 * 
 * @returns {boolean} true 
 */
test('Test adminCheck wrong username', () => {
    const username = 'test';
    const password = 'admin';
    const result = utils.adminCheck(username, password);
    expect(result).toBe(true);
});

/**
 * @param {string} username
 * @param {undefined} password
 * 
 * @returns {boolean} true 
 */
test('Test adminCheck missing password', () => {
    const username = 'admin';
    const password = undefined;
    const result = utils.adminCheck(username, password);
    expect(result).toBe(true);
});

/**
 * @param {undefined} username
 * @param {string} password
 * 
 * @returns {boolean} true 
 */
test('Test adminCheck missing username', () => {
    const username = undefined;
    const password = 'admin';
    const result = utils.adminCheck(username, password);
    expect(result).toBe(true);
});

/**
 * @param {integer} username
 * @param {string} password
 * 
 * @returns {boolean} true 
 */
test('Test adminCheck wrong data type for `username`', () => {
    const username = 1;
    const password = 'admin';
    const result = utils.adminCheck(username, password);
    expect(result).toBe(true);
});

/**
 * @param {string} username
 * @param {integer} password
 * 
 * @returns {boolean} true 
 */
test('Test adminCheck wrong data type for `password`', () => {
    const username = 'admin';
    const password = 1;
    const result = utils.adminCheck(username, password);
    expect(result).toBe(true);
});










/**
 * -------------------------------------------------------------------------------
 * Test checkToken
 * -------------------------------------------------------------------------------
 */

/**
 * @param {jsonObject} body
 * 
 * @returns {boolean} false 
 */
test('Test checkToken success', () => {
    const body = {
        token: 'eyJr389hbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9'
    };
    const result = utils.checkToken(body);
    expect(result).toBe(false);
});

/**
 * @param {jsonObject} body
 * 
 * @returns {boolean} true 
 */
test('Test checkToken wrong token', () => {
    const body = {
        token: 'test'
    };
    const result = utils.checkToken(body);
    expect(result).toBe(true);
});

/**
 * @param {jsonObject} body
 * 
 * @returns {boolean} true 
 */
test('Test checkToken wrong parameter', () => {
    const body = {
        test: 'eyJr389hbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9'
    };
    const result = utils.checkToken(body);
    expect(result).toBe(true);
});

/**
 * @param {jsonObject} body
 * 
 * @returns {boolean} true 
 */
test('Test checkToken missing parameter', () => {
    const body = {};
    const result = utils.checkToken(body);
    expect(result).toBe(true);
});

/**
 * @param {jsonObject} body
 * 
 * @returns {boolean} true 
 */
test('Test checkToken wrong data type', () => {
    const body = 'test';
    const result = utils.checkToken(body);
    expect(result).toBe(true);
});










/**
 * -------------------------------------------------------------------------------
 * Test checkToken
 * -------------------------------------------------------------------------------
 */

/**
 * @param {string} token
 * @param {boolean} profile
 * @param {boolean} update
 * @param {boolean} del
 * 
 * @returns {integer} 1 
 */
test('Test getUserID success for profile==true', () => {
    const token = 'eyJr389hbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9'
    const profile = true;
    const update = false;
    const del = false;
    const result = utils.getUserID(token, profile, update, del);
    expect(result).toBe(1);
});

/**
 * @param {string} token
 * @param {boolean} profile
 * @param {boolean} update
 * @param {boolean} del
 * 
 * @returns {integer} 7
 */
test('Test getUserID success for update==true', () => {
    const token = 'eyJr389hbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9'
    const profile = false;
    const update = true;
    const del = false;
    const result = utils.getUserID(token, profile, update, del);
    expect(result).toBe(7);
});

/**
 * @param {string} token
 * @param {boolean} profile
 * @param {boolean} update
 * @param {boolean} del
 * 
 * @returns {integer} 6
 */
test('Test getUserID success for update==true', () => {
    const token = 'eyJr389hbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9'
    const profile = false;
    const update = false;
    const del = true;
    const result = utils.getUserID(token, profile, update, del);
    expect(result).toBe(6);
});

/**
 * @param {string} token
 * @param {boolean} profile
 * @param {boolean} update
 * @param {boolean} del
 * 
 * @returns {undefined} undefined
 */
test('Test getUserID wrong token', () => {
    const token = 'test'
    const profile = false;
    const update = false;
    const del = false;
    const result = utils.getUserID(token, profile, update, del);
    expect(result).toBe(undefined);
});

/**
 * @param {undefined} token
 * @param {boolean} profile
 * @param {boolean} update
 * @param {boolean} del
 * 
 * @returns {undefined} undefined
 */
test('Test getUserID missing token', () => {
    const token = undefined
    const profile = false;
    const update = false;
    const del = false;
    const result = utils.getUserID(token, profile, update, del);
    expect(result).toBe(undefined);
});

/**
 * @param {undefined} token
 * @param {undefined} profile
 * @param {undefined} update
 * @param {undefined} del
 * 
 * @returns {undefined} undefined
 */
test('Test getUserID missing profile/update/del', () => {
    const token = 'eyJr389hbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9'
    const profile = undefined;
    const update = undefined;
    const del = undefined;
    const result = utils.getUserID(token, profile, update, del);
    expect(result).toBe(undefined);
});










/**
 * -------------------------------------------------------------------------------
 * Test checkToken
 * -------------------------------------------------------------------------------
 */

/**
 * @param {jsonObject} body
 * 
 * @returns {boolean} false
 */
test('Test checkParams success', () => {
    const body = {
        email: "test",
        username: "test",
        password: "test",
        name: {
            firstname: "test",
            lastname: "test"
        },
        address: {
            city: "test",
            street: "test",
            number: "test",
            zipcode: "test",
            geolocation: {
                lat: "test",
                long: "test"
            }
        },
        phone: "test"
    };
    const result = utils.checkParams(body);
    expect(result).toBe(false);
});

/**
 * @param {jsonObject} body
 * 
 * @returns {boolean} true
 */
test('Test checkParams missing email', () => {
    const body = {
        username: "test",
        password: "test",
        name: {
            firstname: "test",
            lastname: "test"
        },
        address: {
            city: "test",
            street: "test",
            number: "test",
            zipcode: "test",
            geolocation: {
                lat: "test",
                long: "test"
            }
        },
        phone: "test"
    };
    const result = utils.checkParams(body);
    expect(result).toBe(true);
});

/**
 * @param {jsonObject} body
 * 
 * @returns {boolean} true
 */
test('Test checkParams missing username', () => {
    const body = {
        email: "test",
        password: "test",
        name: {
            firstname: "test",
            lastname: "test"
        },
        address: {
            city: "test",
            street: "test",
            number: "test",
            zipcode: "test",
            geolocation: {
                lat: "test",
                long: "test"
            }
        },
        phone: "test"
    };
    const result = utils.checkParams(body);
    expect(result).toBe(true);
});

/**
 * @param {jsonObject} body
 * 
 * @returns {boolean} true
 */
test('Test checkParams missing password', () => {
    const body = {
        email: "test",
        username: "test",
        name: {
            firstname: "test",
            lastname: "test"
        },
        address: {
            city: "test",
            street: "test",
            number: "test",
            zipcode: "test",
            geolocation: {
                lat: "test",
                long: "test"
            }
        },
        phone: "test"
    };
    const result = utils.checkParams(body);
    expect(result).toBe(true);
});

/**
 * @param {jsonObject} body
 * 
 * @returns {boolean} true
 */
test('Test checkParams missing name', () => {
    const body = {
        email: "test",
        username: "test",
        password: "test",
        address: {
            city: "test",
            street: "test",
            number: "test",
            zipcode: "test",
            geolocation: {
                lat: "test",
                long: "test"
            }
        },
        phone: "test"
    };
    const result = utils.checkParams(body);
    expect(result).toBe(true);
});

/**
 * @param {jsonObject} body
 * 
 * @returns {boolean} true
 */
test('Test checkParams missing firstname', () => {
    const body = {
        email: "test",
        username: "test",
        password: "test",
        name: {
            lastname: "test"
        },
        address: {
            city: "test",
            street: "test",
            number: "test",
            zipcode: "test",
            geolocation: {
                lat: "test",
                long: "test"
            }
        },
        phone: "test"
    };
    const result = utils.checkParams(body);
    expect(result).toBe(true);
});

/**
 * @param {jsonObject} body
 * 
 * @returns {boolean} true
 */
test('Test checkParams missing lastname', () => {
    const body = {
        email: "test",
        username: "test",
        password: "test",
        name: {
            firstname: "test"
        },
        address: {
            city: "test",
            street: "test",
            number: "test",
            zipcode: "test",
            geolocation: {
                lat: "test",
                long: "test"
            }
        },
        phone: "test"
    };
    const result = utils.checkParams(body);
    expect(result).toBe(true);
});

/**
 * @param {jsonObject} body
 * 
 * @returns {boolean} true
 */
test('Test checkParams missing address', () => {
    const body = {
        email: "test",
        username: "test",
        password: "test",
        name: {
            firstname: "test",
            lastname: "test"
        },
        phone: "test"
    };
    const result = utils.checkParams(body);
    expect(result).toBe(true);
});

/**
 * @param {jsonObject} body
 * 
 * @returns {boolean} true
 */
test('Test checkParams missing city', () => {
    const body = {
        email: "test",
        username: "test",
        password: "test",
        name: {
            firstname: "test",
            lastname: "test"
        },
        address: {
            street: "test",
            number: "test",
            zipcode: "test",
            geolocation: {
                lat: "test",
                long: "test"
            }
        },
        phone: "test"
    };
    const result = utils.checkParams(body);
    expect(result).toBe(true);
});

/**
 * @param {jsonObject} body
 * 
 * @returns {boolean} true
 */
test('Test checkParams missing street', () => {
    const body = {
        email: "test",
        username: "test",
        password: "test",
        name: {
            firstname: "test",
            lastname: "test"
        },
        address: {
            city: "test",
            number: "test",
            zipcode: "test",
            geolocation: {
                lat: "test",
                long: "test"
            }
        },
        phone: "test"
    };
    const result = utils.checkParams(body);
    expect(result).toBe(true);
});

/**
 * @param {jsonObject} body
 * 
 * @returns {boolean} true
 */
test('Test checkParams missing number', () => {
    const body = {
        email: "test",
        username: "test",
        password: "test",
        name: {
            firstname: "test",
            lastname: "test"
        },
        address: {
            city: "test",
            street: "test",
            zipcode: "test",
            geolocation: {
                lat: "test",
                long: "test"
            }
        },
        phone: "test"
    };
    const result = utils.checkParams(body);
    expect(result).toBe(true);
});

/**
 * @param {jsonObject} body
 * 
 * @returns {boolean} true
 */
test('Test checkParams missing zipcode', () => {
    const body = {
        email: "test",
        username: "test",
        password: "test",
        name: {
            firstname: "test",
            lastname: "test"
        },
        address: {
            city: "test",
            street: "test",
            number: "test",
            geolocation: {
                lat: "test",
                long: "test"
            }
        },
        phone: "test"
    };
    const result = utils.checkParams(body);
    expect(result).toBe(true);
});

/**
 * @param {jsonObject} body
 * 
 * @returns {boolean} true
 */
test('Test checkParams missing geolocation', () => {
    const body = {
        email: "test",
        username: "test",
        password: "test",
        name: {
            firstname: "test",
            lastname: "test"
        },
        address: {
            city: "test",
            street: "test",
            number: "test",
            zipcode: "test"
        },
        phone: "test"
    };
    const result = utils.checkParams(body);
    expect(result).toBe(true);
});

/**
 * @param {jsonObject} body
 * 
 * @returns {boolean} true
 */
test('Test checkParams missing lat', () => {
    const body = {
        email: "test",
        username: "test",
        password: "test",
        name: {
            firstname: "test",
            lastname: "test"
        },
        address: {
            city: "test",
            street: "test",
            number: "test",
            zipcode: "test",
            geolocation: {
                long: "test"
            }
        },
        phone: "test"
    };
    const result = utils.checkParams(body);
    expect(result).toBe(true);
});

/**
 * @param {jsonObject} body
 * 
 * @returns {boolean} true
 */
test('Test checkParams missing long', () => {
    const body = {
        email: "test",
        username: "test",
        password: "test",
        name: {
            firstname: "test",
            lastname: "test"
        },
        address: {
            city: "test",
            street: "test",
            number: "test",
            zipcode: "test",
            geolocation: {
                lat: "test"
            }
        },
        phone: "test"
    };
    const result = utils.checkParams(body);
    expect(result).toBe(true);
});

/**
 * @param {jsonObject} body
 * 
 * @returns {boolean} true
 */
test('Test checkParams missing phone', () => {
    const body = {
        email: "test",
        username: "test",
        password: "test",
        name: {
            firstname: "test",
            lastname: "test"
        },
        address: {
            city: "test",
            street: "test",
            number: "test",
            zipcode: "test",
            geolocation: {
                lat: "test",
                long: "test"
            }
        }
    };
    const result = utils.checkParams(body);
    expect(result).toBe(true);
});










/**
 * -------------------------------------------------------------------------------
 * Test registerCheckOverlaps
 * -------------------------------------------------------------------------------
 */

/**
 * @param {jsonObject} body
 * 
 * @returns {boolean} false
 */
test('Test registerCheckOverlaps success', () => {
    const body = {
        email: "John@gmail.com",
        username: "johnd"
    };
    const result = utils.registerCheckOverlaps(body);
    expect(result).toBe(false);
});

/**
 * @param {jsonObject} body
 * 
 * @returns {boolean} true
 */
test('Test registerCheckOverlaps username already existing', () => {
    const body = {
        email: "John@gmail.com",
        username: "test"
    };
    const result = utils.registerCheckOverlaps(body);
    expect(result).toBe(true);
});

/**
 * @param {jsonObject} body
 * 
 * @returns {boolean} true
 */
test('Test registerCheckOverlaps email already existing', () => {
    const body = {
        email: "test@gmail.com",
        username: "johnd"
    };
    const result = utils.registerCheckOverlaps(body);
    expect(result).toBe(true);
});

/**
 * @param {jsonObject} body
 * 
 * @returns {boolean} true
 */
test('Test registerCheckOverlaps missing parameter', () => {
    const body = {
        email: "test@gmail.com"
    };
    const result = utils.registerCheckOverlaps(body);
    expect(result).toBe(true);
});










/**
 * -------------------------------------------------------------------------------
 * Test addUser
 * -------------------------------------------------------------------------------
 */

/**
 * @param {jsonObject} user
 * 
 * @returns {jsonObject} user
 */
test('Test addUser success', () => {
    const user = {
        id: 1
    };
    const result = utils.addUser(user);
    expect(result.id).toBe(21);
});

/**
 * @param {jsonObject} user
 * 
 * @returns {jsonObject} user
 */
test('Test addUser missing id', () => {
    const user = {};
    const result = utils.addUser(user);
    expect(result.id).toBe(21);
});

/**
 * @param {jsonObject} user
 * 
 * @returns {jsonObject} user
 */
test('Test addUser wrong data type', () => {
    const user = {
        id: "test"
    };
    const result = utils.addUser(user);
    expect(result.id).toBe(21);
});










/**
 * -------------------------------------------------------------------------------
 * Test updateUser
 * -------------------------------------------------------------------------------
 */

/**
 * @param {integer} userID
 * @param {jsonObject} body
 * 
 * @returns {integer} user.id
 * @returns {undefined} user.token
 */
test('Test updateUser success', () => {
    const userID = 1;
    const body = {
        id: 3,
        token: "test"
    }
    const result = utils.updateUser(userID, body);
    const results = [result.id, result.token];
    const expectedResults = [userID, undefined]
    expect(results).toStrictEqual(expectedResults);
});

/**
 * @param {integer} userID
 * @param {jsonObject} body
 * 
 * @returns {integer} user.id
 * @returns {undefined} user.token
 */
test('Test updateUser missing token', () => {
    const userID = 1;
    const body = {
        id: 3
    }
    const result = utils.updateUser(userID, body);
    const results = [result.id, result.token];
    const expectedResults = [userID, undefined]
    expect(results).toStrictEqual(expectedResults);
});

/**
 * @param {integer} userID
 * @param {jsonObject} body
 * 
 * @returns {integer} user.id
 * @returns {undefined} user.token
 */
test('Test updateUser missing id', () => {
    const userID = 1;
    const body = {
        token: "test"
    }
    const result = utils.updateUser(userID, body);
    const results = [result.id, result.token];
    const expectedResults = [userID, undefined]
    expect(results).toStrictEqual(expectedResults);
});










/**
 * -------------------------------------------------------------------------------
 * Test userDataBase
 * -------------------------------------------------------------------------------
 */

/**
 * @param {string} username
 * @param {string} password
 * 
 * @returns {boolean} false
 */
test('Test userDataBase success', () => {
    const username = 'mor_2314';
    const password = '83r5^_';
    const result = utils.userDataBase(username, password);
    expect(result).toStrictEqual(false);
});

/**
 * @param {string} username
 * @param {string} password
 * 
 * @returns {boolean} true
 */
test('Test userDataBase wrong username', () => {
    const username = 'test';
    const password = '83r5^_';
    const result = utils.userDataBase(username, password);
    expect(result).toStrictEqual(true);
});

/**
 * @param {string} username
 * @param {string} password
 * 
 * @returns {boolean} true
 */
test('Test userDataBase wrong password', () => {
    const username = 'mor_2314';
    const password = 'test';
    const result = utils.userDataBase(username, password);
    expect(result).toStrictEqual(true);
});

/**
 * @param {string} username
 * @param {string} password
 * 
 * @returns {boolean} true
 */
test('Test userDataBase missing password', () => {
    const username = 'mor_2314';
    const password = undefined;
    const result = utils.userDataBase(username, password);
    expect(result).toStrictEqual(true);
});

/**
 * @param {string} username
 * @param {string} password
 * 
 * @returns {boolean} true
 */
test('Test userDataBase missing username', () => {
    const username = undefined;
    const password = '83r5^_';
    const result = utils.userDataBase(username, password);
    expect(result).toStrictEqual(true);
});










/**
 * -------------------------------------------------------------------------------
 * Test tokenVerification
 * -------------------------------------------------------------------------------
 */

/**
 * @param {string} token
 * 
 * @returns {boolean} false
 */
test('Test tokenVerification success', () => {
    const token = 'eyJr389hbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9';
    const result = utils.tokenVerification(token);
    expect(result).toStrictEqual(false);
});

/**
 * @param {string} token
 * 
 * @returns {boolean} true
 */
test('Test tokenVerification wrong token', () => {
    const token = 'test';
    const result = utils.tokenVerification(token);
    expect(result).toStrictEqual(true);
});

/**
 * @param {string} token
 * 
 * @returns {boolean} true
 */
test('Test tokenVerification wrong data type', () => {
    const token = 1;
    const result = utils.tokenVerification(token);
    expect(result).toStrictEqual(true);
});

/**
 * @param {string} token
 * 
 * @returns {boolean} true
 */
test('Test tokenVerification missing token', () => {
    const token = undefined;
    const result = utils.tokenVerification(token);
    expect(result).toStrictEqual(true);
});