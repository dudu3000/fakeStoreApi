const utils = require('../controller/UserController');
const axios = require('axios');
jest.setTimeout(15000);
/**
 * -------------------------------------------------------------------------------
 * Test Test POST/user/all
 * -------------------------------------------------------------------------------
 */

/**
 * @method POST
 * @param {string} username
 * @param {string} password
 * @param {integer} limit
 * @param {string} sort
 */
test('Test POST/user/all success without query parameters', async() => {
    const body = {
        username: "admin",
        password: "admin"
    };
    const results = await axios.post("http://localhost:3000/user/all", body, {
        headers: {
            'Content-Type': 'application/json'
        }
    });
    const expected = [
        {
            "address": {
                "geolocation": {
                    "lat": "-37.3159",
                    "long": "81.1496"
                },
                "city": "kilcoole",
                "street": "new road",
                "number": 7682,
                "zipcode": "12926-3874"
            },
            "id": 1,
            "email": "john@gmail.com",
            "username": "johnd",
            "password": "m38rmF$",
            "name": {
                "firstname": "john",
                "lastname": "doe"
            },
            "phone": "1-570-236-7033",
            "__v": 0
        },
        {
            "address": {
                "geolocation": {
                    "lat": "-37.3159",
                    "long": "81.1496"
                },
                "city": "kilcoole",
                "street": "Lovers Ln",
                "number": 7267,
                "zipcode": "12926-3874"
            },
            "id": 2,
            "email": "morrison@gmail.com",
            "username": "mor_2314",
            "password": "83r5^_",
            "name": {
                "firstname": "david",
                "lastname": "morrison"
            },
            "phone": "1-570-236-7033",
            "__v": 0
        },
        {
            "address": {
                "geolocation": {
                    "lat": "40.3467",
                    "long": "-30.1310"
                },
                "city": "Cullman",
                "street": "Frances Ct",
                "number": 86,
                "zipcode": "29567-1452"
            },
            "id": 3,
            "email": "kevin@gmail.com",
            "username": "kevinryan",
            "password": "kev02937@",
            "name": {
                "firstname": "kevin",
                "lastname": "ryan"
            },
            "phone": "1-567-094-1345",
            "__v": 0
        },
        {
            "address": {
                "geolocation": {
                    "lat": "50.3467",
                    "long": "-20.1310"
                },
                "city": "San Antonio",
                "street": "Hunters Creek Dr",
                "number": 6454,
                "zipcode": "98234-1734"
            },
            "id": 4,
            "email": "don@gmail.com",
            "username": "donero",
            "password": "ewedon",
            "name": {
                "firstname": "don",
                "lastname": "romer"
            },
            "phone": "1-765-789-6734",
            "__v": 0
        },
        {
            "address": {
                "geolocation": {
                    "lat": "40.3467",
                    "long": "-40.1310"
                },
                "city": "san Antonio",
                "street": "adams St",
                "number": 245,
                "zipcode": "80796-1234"
            },
            "id": 5,
            "email": "derek@gmail.com",
            "username": "derek",
            "password": "jklg*_56",
            "name": {
                "firstname": "derek",
                "lastname": "powell"
            },
            "phone": "1-956-001-1945",
            "__v": 0
        },
        {
            "address": {
                "geolocation": {
                    "lat": "20.1677",
                    "long": "-10.6789"
                },
                "city": "el paso",
                "street": "prospect st",
                "number": 124,
                "zipcode": "12346-0456"
            },
            "id": 6,
            "email": "david_r@gmail.com",
            "username": "david_r",
            "password": "3478*#54",
            "name": {
                "firstname": "david",
                "lastname": "russell"
            },
            "phone": "1-678-345-9856",
            "__v": 0
        },
        {
            "address": {
                "geolocation": {
                    "lat": "10.3456",
                    "long": "20.6419"
                },
                "city": "fresno",
                "street": "saddle st",
                "number": 1342,
                "zipcode": "96378-0245"
            },
            "id": 7,
            "email": "miriam@gmail.com",
            "username": "snyder",
            "password": "f238&@*$",
            "name": {
                "firstname": "miriam",
                "lastname": "snyder"
            },
            "phone": "1-123-943-0563",
            "__v": 0
        },
        {
            "address": {
                "geolocation": {
                    "lat": "50.3456",
                    "long": "10.6419"
                },
                "city": "mesa",
                "street": "vally view ln",
                "number": 1342,
                "zipcode": "96378-0245"
            },
            "id": 8,
            "email": "william@gmail.com",
            "username": "hopkins",
            "password": "William56$hj",
            "name": {
                "firstname": "william",
                "lastname": "hopkins"
            },
            "phone": "1-478-001-0890",
            "__v": 0
        },
        {
            "address": {
                "geolocation": {
                    "lat": "40.12456",
                    "long": "20.5419"
                },
                "city": "miami",
                "street": "avondale ave",
                "number": 345,
                "zipcode": "96378-0245"
            },
            "id": 9,
            "email": "kate@gmail.com",
            "username": "kate_h",
            "password": "kfejk@*_",
            "name": {
                "firstname": "kate",
                "lastname": "hale"
            },
            "phone": "1-678-456-1934",
            "__v": 0
        },
        {
            "address": {
                "geolocation": {
                    "lat": "30.24788",
                    "long": "-20.545419"
                },
                "city": "fort wayne",
                "street": "oak lawn ave",
                "number": 526,
                "zipcode": "10256-4532"
            },
            "id": 10,
            "email": "jimmie@gmail.com",
            "username": "jimmie_k",
            "password": "klein*#%*",
            "name": {
                "firstname": "jimmie",
                "lastname": "klein"
            },
            "phone": "1-104-001-4567",
            "__v": 0
        }
    ];
    const received = [results.data, results.status];
    expect(received).toStrictEqual([expected, 200]);
});

/**
 * @method POST
 * @param {string} username
 * @param {string} password
 * @param {integer} limit
 * @param {string} sort
 */
test('Test POST/user/all success using limit', async() => {
    const body = {
        username: "admin",
        password: "admin"
    };
    const results = await axios.post("http://localhost:3000/user/all?limit=1", body, {
        headers: {
            'Content-Type': 'application/json'
        }
    });
    const expected = [
        {
            "address": {
                "geolocation": {
                    "lat": "-37.3159",
                    "long": "81.1496"
                },
                "city": "kilcoole",
                "street": "new road",
                "number": 7682,
                "zipcode": "12926-3874"
            },
            "id": 1,
            "email": "john@gmail.com",
            "username": "johnd",
            "password": "m38rmF$",
            "name": {
                "firstname": "john",
                "lastname": "doe"
            },
            "phone": "1-570-236-7033",
            "__v": 0
        }
    ];
    const received = [results.data, results.status];
    expect(received).toStrictEqual([expected, 200]);
});

/**
 * @method POST
 * @param {string} username
 * @param {string} password
 * @param {integer} limit
 * @param {string} sort
 */
test('Test POST/user/all success using wrong data type for limit', async() => {
    const body = {
        username: "admin",
        password: "admin"
    };
    const results = await axios.post("http://localhost:3000/user/all?limit=test", body, {
        headers: {
            'Content-Type': 'application/json'
        }
    });
    const expected = [
        {
            "address": {
                "geolocation": {
                    "lat": "-37.3159",
                    "long": "81.1496"
                },
                "city": "kilcoole",
                "street": "new road",
                "number": 7682,
                "zipcode": "12926-3874"
            },
            "id": 1,
            "email": "john@gmail.com",
            "username": "johnd",
            "password": "m38rmF$",
            "name": {
                "firstname": "john",
                "lastname": "doe"
            },
            "phone": "1-570-236-7033",
            "__v": 0
        },
        {
            "address": {
                "geolocation": {
                    "lat": "-37.3159",
                    "long": "81.1496"
                },
                "city": "kilcoole",
                "street": "Lovers Ln",
                "number": 7267,
                "zipcode": "12926-3874"
            },
            "id": 2,
            "email": "morrison@gmail.com",
            "username": "mor_2314",
            "password": "83r5^_",
            "name": {
                "firstname": "david",
                "lastname": "morrison"
            },
            "phone": "1-570-236-7033",
            "__v": 0
        },
        {
            "address": {
                "geolocation": {
                    "lat": "40.3467",
                    "long": "-30.1310"
                },
                "city": "Cullman",
                "street": "Frances Ct",
                "number": 86,
                "zipcode": "29567-1452"
            },
            "id": 3,
            "email": "kevin@gmail.com",
            "username": "kevinryan",
            "password": "kev02937@",
            "name": {
                "firstname": "kevin",
                "lastname": "ryan"
            },
            "phone": "1-567-094-1345",
            "__v": 0
        },
        {
            "address": {
                "geolocation": {
                    "lat": "50.3467",
                    "long": "-20.1310"
                },
                "city": "San Antonio",
                "street": "Hunters Creek Dr",
                "number": 6454,
                "zipcode": "98234-1734"
            },
            "id": 4,
            "email": "don@gmail.com",
            "username": "donero",
            "password": "ewedon",
            "name": {
                "firstname": "don",
                "lastname": "romer"
            },
            "phone": "1-765-789-6734",
            "__v": 0
        },
        {
            "address": {
                "geolocation": {
                    "lat": "40.3467",
                    "long": "-40.1310"
                },
                "city": "san Antonio",
                "street": "adams St",
                "number": 245,
                "zipcode": "80796-1234"
            },
            "id": 5,
            "email": "derek@gmail.com",
            "username": "derek",
            "password": "jklg*_56",
            "name": {
                "firstname": "derek",
                "lastname": "powell"
            },
            "phone": "1-956-001-1945",
            "__v": 0
        },
        {
            "address": {
                "geolocation": {
                    "lat": "20.1677",
                    "long": "-10.6789"
                },
                "city": "el paso",
                "street": "prospect st",
                "number": 124,
                "zipcode": "12346-0456"
            },
            "id": 6,
            "email": "david_r@gmail.com",
            "username": "david_r",
            "password": "3478*#54",
            "name": {
                "firstname": "david",
                "lastname": "russell"
            },
            "phone": "1-678-345-9856",
            "__v": 0
        },
        {
            "address": {
                "geolocation": {
                    "lat": "10.3456",
                    "long": "20.6419"
                },
                "city": "fresno",
                "street": "saddle st",
                "number": 1342,
                "zipcode": "96378-0245"
            },
            "id": 7,
            "email": "miriam@gmail.com",
            "username": "snyder",
            "password": "f238&@*$",
            "name": {
                "firstname": "miriam",
                "lastname": "snyder"
            },
            "phone": "1-123-943-0563",
            "__v": 0
        },
        {
            "address": {
                "geolocation": {
                    "lat": "50.3456",
                    "long": "10.6419"
                },
                "city": "mesa",
                "street": "vally view ln",
                "number": 1342,
                "zipcode": "96378-0245"
            },
            "id": 8,
            "email": "william@gmail.com",
            "username": "hopkins",
            "password": "William56$hj",
            "name": {
                "firstname": "william",
                "lastname": "hopkins"
            },
            "phone": "1-478-001-0890",
            "__v": 0
        },
        {
            "address": {
                "geolocation": {
                    "lat": "40.12456",
                    "long": "20.5419"
                },
                "city": "miami",
                "street": "avondale ave",
                "number": 345,
                "zipcode": "96378-0245"
            },
            "id": 9,
            "email": "kate@gmail.com",
            "username": "kate_h",
            "password": "kfejk@*_",
            "name": {
                "firstname": "kate",
                "lastname": "hale"
            },
            "phone": "1-678-456-1934",
            "__v": 0
        },
        {
            "address": {
                "geolocation": {
                    "lat": "30.24788",
                    "long": "-20.545419"
                },
                "city": "fort wayne",
                "street": "oak lawn ave",
                "number": 526,
                "zipcode": "10256-4532"
            },
            "id": 10,
            "email": "jimmie@gmail.com",
            "username": "jimmie_k",
            "password": "klein*#%*",
            "name": {
                "firstname": "jimmie",
                "lastname": "klein"
            },
            "phone": "1-104-001-4567",
            "__v": 0
        }
    ];
    const received = [results.data, results.status];
    expect(received).toStrictEqual([expected, 200]);
});

/**
 * @method POST
 * @param {string} username
 * @param {string} password
 * @param {integer} limit
 * @param {string} sort
 */
test('Test POST/user/all success using sort=desc', async() => {
    const body = {
        username: "admin",
        password: "admin"
    };
    const results = await axios.post("http://localhost:3000/user/all?sort=desc", body, {
        headers: {
            'Content-Type': 'application/json'
        }
    });
    const expected = [
        {
            "address": {
                "geolocation": {
                    "lat": "30.24788",
                    "long": "-20.545419"
                },
                "city": "fort wayne",
                "street": "oak lawn ave",
                "number": 526,
                "zipcode": "10256-4532"
            },
            "id": 10,
            "email": "jimmie@gmail.com",
            "username": "jimmie_k",
            "password": "klein*#%*",
            "name": {
                "firstname": "jimmie",
                "lastname": "klein"
            },
            "phone": "1-104-001-4567",
            "__v": 0
        },
        {
            "address": {
                "geolocation": {
                    "lat": "40.12456",
                    "long": "20.5419"
                },
                "city": "miami",
                "street": "avondale ave",
                "number": 345,
                "zipcode": "96378-0245"
            },
            "id": 9,
            "email": "kate@gmail.com",
            "username": "kate_h",
            "password": "kfejk@*_",
            "name": {
                "firstname": "kate",
                "lastname": "hale"
            },
            "phone": "1-678-456-1934",
            "__v": 0
        },
        {
            "address": {
                "geolocation": {
                    "lat": "50.3456",
                    "long": "10.6419"
                },
                "city": "mesa",
                "street": "vally view ln",
                "number": 1342,
                "zipcode": "96378-0245"
            },
            "id": 8,
            "email": "william@gmail.com",
            "username": "hopkins",
            "password": "William56$hj",
            "name": {
                "firstname": "william",
                "lastname": "hopkins"
            },
            "phone": "1-478-001-0890",
            "__v": 0
        },
        {
            "address": {
                "geolocation": {
                    "lat": "10.3456",
                    "long": "20.6419"
                },
                "city": "fresno",
                "street": "saddle st",
                "number": 1342,
                "zipcode": "96378-0245"
            },
            "id": 7,
            "email": "miriam@gmail.com",
            "username": "snyder",
            "password": "f238&@*$",
            "name": {
                "firstname": "miriam",
                "lastname": "snyder"
            },
            "phone": "1-123-943-0563",
            "__v": 0
        },
        {
            "address": {
                "geolocation": {
                    "lat": "20.1677",
                    "long": "-10.6789"
                },
                "city": "el paso",
                "street": "prospect st",
                "number": 124,
                "zipcode": "12346-0456"
            },
            "id": 6,
            "email": "david_r@gmail.com",
            "username": "david_r",
            "password": "3478*#54",
            "name": {
                "firstname": "david",
                "lastname": "russell"
            },
            "phone": "1-678-345-9856",
            "__v": 0
        },
        {
            "address": {
                "geolocation": {
                    "lat": "40.3467",
                    "long": "-40.1310"
                },
                "city": "san Antonio",
                "street": "adams St",
                "number": 245,
                "zipcode": "80796-1234"
            },
            "id": 5,
            "email": "derek@gmail.com",
            "username": "derek",
            "password": "jklg*_56",
            "name": {
                "firstname": "derek",
                "lastname": "powell"
            },
            "phone": "1-956-001-1945",
            "__v": 0
        },
        {
            "address": {
                "geolocation": {
                    "lat": "50.3467",
                    "long": "-20.1310"
                },
                "city": "San Antonio",
                "street": "Hunters Creek Dr",
                "number": 6454,
                "zipcode": "98234-1734"
            },
            "id": 4,
            "email": "don@gmail.com",
            "username": "donero",
            "password": "ewedon",
            "name": {
                "firstname": "don",
                "lastname": "romer"
            },
            "phone": "1-765-789-6734",
            "__v": 0
        },
        {
            "address": {
                "geolocation": {
                    "lat": "40.3467",
                    "long": "-30.1310"
                },
                "city": "Cullman",
                "street": "Frances Ct",
                "number": 86,
                "zipcode": "29567-1452"
            },
            "id": 3,
            "email": "kevin@gmail.com",
            "username": "kevinryan",
            "password": "kev02937@",
            "name": {
                "firstname": "kevin",
                "lastname": "ryan"
            },
            "phone": "1-567-094-1345",
            "__v": 0
        },
        {
            "address": {
                "geolocation": {
                    "lat": "-37.3159",
                    "long": "81.1496"
                },
                "city": "kilcoole",
                "street": "Lovers Ln",
                "number": 7267,
                "zipcode": "12926-3874"
            },
            "id": 2,
            "email": "morrison@gmail.com",
            "username": "mor_2314",
            "password": "83r5^_",
            "name": {
                "firstname": "david",
                "lastname": "morrison"
            },
            "phone": "1-570-236-7033",
            "__v": 0
        },
        {
            "address": {
                "geolocation": {
                    "lat": "-37.3159",
                    "long": "81.1496"
                },
                "city": "kilcoole",
                "street": "new road",
                "number": 7682,
                "zipcode": "12926-3874"
            },
            "id": 1,
            "email": "john@gmail.com",
            "username": "johnd",
            "password": "m38rmF$",
            "name": {
                "firstname": "john",
                "lastname": "doe"
            },
            "phone": "1-570-236-7033",
            "__v": 0
        }
    ];
    const received = [results.data, results.status];
    expect(received).toStrictEqual([expected, 200]);
});

/**
 * @method POST
 * @param {string} username
 * @param {string} password
 * @param {integer} limit
 * @param {string} sort
 */
test('Test POST/user/all success using wrong value for sort', async() => {
    const body = {
        username: "admin",
        password: "admin"
    };
    const results = await axios.post("http://localhost:3000/user/all?sort=test", body, {
        headers: {
            'Content-Type': 'application/json'
        }
    });
    const expected = [
        {
            "address": {
                "geolocation": {
                    "lat": "-37.3159",
                    "long": "81.1496"
                },
                "city": "kilcoole",
                "street": "new road",
                "number": 7682,
                "zipcode": "12926-3874"
            },
            "id": 1,
            "email": "john@gmail.com",
            "username": "johnd",
            "password": "m38rmF$",
            "name": {
                "firstname": "john",
                "lastname": "doe"
            },
            "phone": "1-570-236-7033",
            "__v": 0
        },
        {
            "address": {
                "geolocation": {
                    "lat": "-37.3159",
                    "long": "81.1496"
                },
                "city": "kilcoole",
                "street": "Lovers Ln",
                "number": 7267,
                "zipcode": "12926-3874"
            },
            "id": 2,
            "email": "morrison@gmail.com",
            "username": "mor_2314",
            "password": "83r5^_",
            "name": {
                "firstname": "david",
                "lastname": "morrison"
            },
            "phone": "1-570-236-7033",
            "__v": 0
        },
        {
            "address": {
                "geolocation": {
                    "lat": "40.3467",
                    "long": "-30.1310"
                },
                "city": "Cullman",
                "street": "Frances Ct",
                "number": 86,
                "zipcode": "29567-1452"
            },
            "id": 3,
            "email": "kevin@gmail.com",
            "username": "kevinryan",
            "password": "kev02937@",
            "name": {
                "firstname": "kevin",
                "lastname": "ryan"
            },
            "phone": "1-567-094-1345",
            "__v": 0
        },
        {
            "address": {
                "geolocation": {
                    "lat": "50.3467",
                    "long": "-20.1310"
                },
                "city": "San Antonio",
                "street": "Hunters Creek Dr",
                "number": 6454,
                "zipcode": "98234-1734"
            },
            "id": 4,
            "email": "don@gmail.com",
            "username": "donero",
            "password": "ewedon",
            "name": {
                "firstname": "don",
                "lastname": "romer"
            },
            "phone": "1-765-789-6734",
            "__v": 0
        },
        {
            "address": {
                "geolocation": {
                    "lat": "40.3467",
                    "long": "-40.1310"
                },
                "city": "san Antonio",
                "street": "adams St",
                "number": 245,
                "zipcode": "80796-1234"
            },
            "id": 5,
            "email": "derek@gmail.com",
            "username": "derek",
            "password": "jklg*_56",
            "name": {
                "firstname": "derek",
                "lastname": "powell"
            },
            "phone": "1-956-001-1945",
            "__v": 0
        },
        {
            "address": {
                "geolocation": {
                    "lat": "20.1677",
                    "long": "-10.6789"
                },
                "city": "el paso",
                "street": "prospect st",
                "number": 124,
                "zipcode": "12346-0456"
            },
            "id": 6,
            "email": "david_r@gmail.com",
            "username": "david_r",
            "password": "3478*#54",
            "name": {
                "firstname": "david",
                "lastname": "russell"
            },
            "phone": "1-678-345-9856",
            "__v": 0
        },
        {
            "address": {
                "geolocation": {
                    "lat": "10.3456",
                    "long": "20.6419"
                },
                "city": "fresno",
                "street": "saddle st",
                "number": 1342,
                "zipcode": "96378-0245"
            },
            "id": 7,
            "email": "miriam@gmail.com",
            "username": "snyder",
            "password": "f238&@*$",
            "name": {
                "firstname": "miriam",
                "lastname": "snyder"
            },
            "phone": "1-123-943-0563",
            "__v": 0
        },
        {
            "address": {
                "geolocation": {
                    "lat": "50.3456",
                    "long": "10.6419"
                },
                "city": "mesa",
                "street": "vally view ln",
                "number": 1342,
                "zipcode": "96378-0245"
            },
            "id": 8,
            "email": "william@gmail.com",
            "username": "hopkins",
            "password": "William56$hj",
            "name": {
                "firstname": "william",
                "lastname": "hopkins"
            },
            "phone": "1-478-001-0890",
            "__v": 0
        },
        {
            "address": {
                "geolocation": {
                    "lat": "40.12456",
                    "long": "20.5419"
                },
                "city": "miami",
                "street": "avondale ave",
                "number": 345,
                "zipcode": "96378-0245"
            },
            "id": 9,
            "email": "kate@gmail.com",
            "username": "kate_h",
            "password": "kfejk@*_",
            "name": {
                "firstname": "kate",
                "lastname": "hale"
            },
            "phone": "1-678-456-1934",
            "__v": 0
        },
        {
            "address": {
                "geolocation": {
                    "lat": "30.24788",
                    "long": "-20.545419"
                },
                "city": "fort wayne",
                "street": "oak lawn ave",
                "number": 526,
                "zipcode": "10256-4532"
            },
            "id": 10,
            "email": "jimmie@gmail.com",
            "username": "jimmie_k",
            "password": "klein*#%*",
            "name": {
                "firstname": "jimmie",
                "lastname": "klein"
            },
            "phone": "1-104-001-4567",
            "__v": 0
        }
    ];
    const received = [results.data, results.status];
    expect(received).toStrictEqual([expected, 200]);
    expect(received).toStrictEqual([expected, 200]);
});

/**
 * @method POST
 * @param {string} username
 * @param {string} password
 * @param {integer} limit
 * @param {string} sort
 */
test('Test POST/user/all success using limit=1&sort=desc', async() => {
    const body = {
        username: "admin",
        password: "admin"
    };
    const results = await axios.post("http://localhost:3000/user/all?limit=1&sort=desc", body, {
        headers: {
            'Content-Type': 'application/json'
        }
    });
    const expected = [
        {
            "address": {
                "geolocation": {
                    "lat": "30.24788",
                    "long": "-20.545419"
                },
                "city": "fort wayne",
                "street": "oak lawn ave",
                "number": 526,
                "zipcode": "10256-4532"
            },
            "id": 10,
            "email": "jimmie@gmail.com",
            "username": "jimmie_k",
            "password": "klein*#%*",
            "name": {
                "firstname": "jimmie",
                "lastname": "klein"
            },
            "phone": "1-104-001-4567",
            "__v": 0
        }
    ];
    const received = [results.data, results.status];
    expect(received).toStrictEqual([expected, 200]);
    expect(received).toStrictEqual([expected, 200]);
});










/**
 * -------------------------------------------------------------------------------
 * Test Test POST/user/profile
 * -------------------------------------------------------------------------------
 */

/**
 * @method POST
 * @param {string} token
 * 
 * @returns {jsonObject} profile
 */
test('Test POST/user/profile success', async() => {
    const body = {
        token: "eyJr389hbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9"
    };
    const results = await axios.post("http://localhost:3000/user/profile", body, {
        headers: {
            'Content-Type': 'application/json'
        }
    });
    const expected = {
        "address": {
            "geolocation": {
                "lat": "-37.3159",
                "long": "81.1496"
            },
            "city": "kilcoole",
            "street": "new road",
            "number": 7682,
            "zipcode": "12926-3874"
        },
        "id": 1,
        "email": "john@gmail.com",
        "username": "johnd",
        "password": "m38rmF$",
        "name": {
            "firstname": "john",
            "lastname": "doe"
        },
        "phone": "1-570-236-7033",
        "__v": 0
    };
    const received = [results.data, results.status];
    expect(received).toStrictEqual([expected, 200]);
    expect(received).toStrictEqual([expected, 200]);
});

/**
 * @method POST
 * @param {string} token
 * 
 * @returns {jsonObject} profile
 */
test('Test POST/user/profile wrong token', async() => {
    const body = {
        token: "test"
    };
    let results;
    await axios.post("http://localhost:3000/user/profile", body, {
        headers: {
            'Content-Type': 'application/json'
        }
    }).catch(err => results = err);
    const expected = {
        error: "Token missing or invalid!"
    };
    const received = [results.response.data, results.response.status];
    expect(received).toStrictEqual([expected, 403]);
});

/**
 * @method POST
 * 
 * @returns {jsonObject} profile
 */
test('Test POST/user/profile missing token', async() => {
    const body = {}
    let results;
    await axios.post("http://localhost:3000/user/profile", body, {
        headers: {
            'Content-Type': 'application/json'
        }
    }).catch(err => results = err);
    const expected = {
        error: "Token missing or invalid!"
    };
    const received = [results.response.data, results.response.status];
    expect(received).toStrictEqual([expected, 403]);
});










/**
 * -------------------------------------------------------------------------------
 * Test Test PUT/user
 * -------------------------------------------------------------------------------
 */

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
test('Test PUT/user success', async() => {
    const body = {
        "email":"John@gmail.com",
        "username":"johnd",
        "password":"m38rmF$",
        "name":{
            "firstname":"John",
            "lastname":"Doe"
        },
        "address":{
            "city":"kilcoole",
            "street":"7835 new road",
            "number":3,
            "zipcode":"12926-3874",
            "geolocation":{
                "lat":-37.3159,
                "long":81.1496
            }
        },
        "phone":"1-570-236-7033"
    };
    const results = await axios.put("http://localhost:3000/user", body, {
        headers: {
            'Content-Type': 'application/json'
        }
    });
    const expected = {
        "id": 21,
        "email": "John@gmail.com",
        "username": "johnd",
        "password": "m38rmF$",
        "name": {},
        "address": {
            "city": "kilcoole",
            "street": "7835 new road",
            "geolocation": {
                "lat": -37.3159,
                "long": 81.1496
            }
        },
        "phone": "1-570-236-7033"
    };
    const received = [results.data, results.status];
    expect(received).toStrictEqual([expected, 200]);
});

/** 
 * @method PUT
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
test('Test PUT/user missing parameter', async() => {
    const body = {
        "username":"johnd",
        "password":"m38rmF$",
        "name":{
            "firstname":"John",
            "lastname":"Doe"
        },
        "address":{
            "city":"kilcoole",
            "street":"7835 new road",
            "number":3,
            "zipcode":"12926-3874",
            "geolocation":{
                "lat":-37.3159,
                "long":81.1496
            }
        },
        "phone":"1-570-236-7033"
    };
    let results;
    await axios.put("http://localhost:3000/user", body, {
        headers: {
            'Content-Type': 'application/json'
        }
    }).catch(err => results = err);
    const expected = {
        error: "Missing parameters!"
    };
    const received = [results.response.data, results.response.status];
    expect(received).toStrictEqual([expected, 400]);
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
test('Test PUT/user email/user already exists', async() => {
    const body = {
        "email": "test@gmail.com",
        "username":"johnd",
        "password":"m38rmF$",
        "name":{
            "firstname":"John",
            "lastname":"Doe"
        },
        "address":{
            "city":"kilcoole",
            "street":"7835 new road",
            "number":3,
            "zipcode":"12926-3874",
            "geolocation":{
                "lat":-37.3159,
                "long":81.1496
            }
        },
        "phone":"1-570-236-7033"
    };
    let results;
    await axios.put("http://localhost:3000/user", body, {
        headers: {
            'Content-Type': 'application/json'
        }
    }).catch(err => results = err);
    const expected = {
        "error": "Email or username already exists!"
    };
    const received = [results.response.data, results.response.status];
    expect(received).toStrictEqual([expected, 403]);
});










/**
 * -------------------------------------------------------------------------------
 * Test Test PATCH/user
 * -------------------------------------------------------------------------------
 */

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
test('Test PATCH/user success', async() => {
    const body = {
        "token": "eyJr389hbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9",
        "email":"John@gmail.com",
        "username":"johnd",
        "password":"m38rmF$",
        "name":{
            "firstname":"John",
            "lastname":"Doe"
        },
        "address":{
            "city":"kilcoole",
            "street":"7835 new road",
            "number":3,
            "zipcode":"12926-3874",
            "geolocation":{
                "lat":"-37.3159",
                "long":"81.1496"
            }
        },
        "phone":"1-570-236-7033"
        }
        ;
    const results = await axios.patch("http://localhost:3000/user", body, {
        headers: {
            'Content-Type': 'application/json'
        }
    });
    const expected = {
        "id": "7",
        "email": "John@gmail.com",
        "username": "johnd",
        "password": "m38rmF$",
        "name": {},
        "address": {
            "city": "kilcoole",
            "street": "7835 new road",
            "geolocation": {
                "lat": "-37.3159",
                "long": "81.1496"
            }
        },
        "phone": "1-570-236-7033"
    };
    const received = [results.data, results.status];
    expect(received).toStrictEqual([expected, 200]);
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
test('Test PATCH/user wrong token', async() => {
    const body = {
        "token": "test",
        "email":"John@gmail.com",
        "username":"johnd",
        "password":"m38rmF$",
        "name":{
            "firstname":"John",
            "lastname":"Doe"
        },
        "address":{
            "city":"kilcoole",
            "street":"7835 new road",
            "number":3,
            "zipcode":"12926-3874",
            "geolocation":{
                "lat":"-37.3159",
                "long":"81.1496"
            }
        },
        "phone":"1-570-236-7033"
        };
    let results;
    await axios.patch("http://localhost:3000/user", body, {
        headers: {
            'Content-Type': 'application/json'
        }
    }).catch(err => results = err);
    const expected = {
        "error": "Token missing or invalid!"
    };
    const received = [results.response.data, results.response.status];
    expect(received).toStrictEqual([expected, 403]);
});

/**
 * @method PATCH
 * @param {string} token
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
test('Test PATCH/user missing parameter', async() => {
    const body = {
        "token": "eyJr389hbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9",
        "username":"johnd",
        "password":"m38rmF$",
        "name":{
            "firstname":"John",
            "lastname":"Doe"
        },
        "address":{
            "city":"kilcoole",
            "street":"7835 new road",
            "number":3,
            "zipcode":"12926-3874",
            "geolocation":{
                "lat":"-37.3159",
                "long":"81.1496"
            }
        },
        "phone":"1-570-236-7033"
        };
    let results;
    await axios.patch("http://localhost:3000/user", body, {
        headers: {
            'Content-Type': 'application/json'
        }
    }).catch(err => results = err);
    const expected = {
        "error": "Missing parameters!"
    };
    const received = [results.response.data, results.response.status];
    expect(received).toStrictEqual([expected, 400]);
});










/**
 * -------------------------------------------------------------------------------
 * Test Test POST/user/login
 * -------------------------------------------------------------------------------
 */

/**
 * @method POST
 * @param {string} username
 * @param {string} password
 * 
 * @returns {string} token
 */
test('Test POST/user/login success', async() => {
    const body = {
        "username": "mor_2314",
        "password": "83r5^_"
    };
    const results = await axios.post("http://localhost:3000/user/login", body, {
        headers: {
            'Content-Type': 'application/json'
        }
    });
    const expected = {
        "token": "eyJr389hbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9"
    };
    const received = [results.data, results.status];
    expect(received).toStrictEqual([expected, 200]);
});

/**
 * @method POST
 * @param {string} username
 * @param {string} password
 * 
 * @returns {string} token
 */
test('Test POST/user/login wrong password/username', async() => {
    const body = {
        "username": "test",
        "password": "test"
    };
    let results;
    await axios.post("http://localhost:3000/user/login", body, {
        headers: {
            'Content-Type': 'application/json'
        }
    }).catch(err => results = err);
    const expected = {
        "error": "Invalid username or password!"
    };
    const received = [results.response.data, results.response.status];
    expect(received).toStrictEqual([expected, 403]);
});

/**
 * @method POST
 * @param {string} password
 * 
 * @returns {string} token
 */
test('Test POST/user/login missing parameter', async() => {
    const body = {
        "password": "test"
    };
    let results;
    await axios.post("http://localhost:3000/user/login", body, {
        headers: {
            'Content-Type': 'application/json'
        }
    }).catch(err => results = err);
    const expected = {
        "error": "Missing parameters!"
    };
    const received = [results.response.data, results.response.status];
    expect(received).toStrictEqual([expected, 400]);
});