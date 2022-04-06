# Store RESTful server

### This server access all endpoints provided by `Fakestoreapi.com` providing additional checks and data managament. All data (usernames, password, tokens, etc) are hardcoded using `Fakestoreapi.com`'s examples.
### There were created unit tests for `UserUtils` and integration tests for `UserController`

## Installing
 - Clone the repository localy
 - Open terminal inside main folder of the repository
 - Run `npm install`
 - Configure `HOST` and `PORT` in `.env` file (default: `HOST=http://localhost`, `PORT=3000`)

## Run server
 - Open terminal inside main folder of the repository
 - Run `npm start`

## Run tests
 - Open terminal inside main folder of the repository
 - Run `npm start`
 - Run `npm test`

# Documentation

## User
<hr>

## Get all users: `[POST]/user/all?limit&sort`<br>

Required body parameters:
```
{
    username: "admin",
    password: "admin
}
```
Only administrators can view all users of the store, therefore a list will be returned only for the dummy credentials provided in the example<br>
Optional query parameters:
```
limit {integer} > 0
sort {string} "desc"
```
For any other data type/value then those specified in example, the feature of the specific parameter will not be applied



## Get user's profile: `[POST]/user/profile`<br>

Required body parameter:
```
{
    token: "eyJr389hbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9"
}
```
Returns profile of the user. Requires user to have a token. (Only the value specified in example works)<br>



## Add new user: `[PUT]/user`<br>

Required body parameter:
```
{
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
}
```
Returns new created user. Email and username values must be as mentioned in example, otherwise it will be considered as already existing user.<br>



## Update user: `[PATCH]/user`<br>

Required body parameter:
```
{
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
```
Updates user's information requiring token used to get user's id.<br>



## Delete user: `[DELETE]/user`<br>

Required body parameter:
```
{
    "token": "eyJr389hbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9"
}            
```
Delete user's account requiring token used to get user's id.<br>



## Login user: `[POST]/user/login`<br>

Required body parameter:
```
{
    "username": "mor_2314",
    "password": "83r5^_"
}         
```
Values specified in example are required, otherwise user will not be found. Returns a token.<br>




## Product
<hr>



## Get all products: `[GET]/product/all?limit&sort`<br>

Optional query parameters:
```
{
    limit {integer} > 0
    sort {string} "desc"
}
```
For any other data type/value then those specified in example, the feature of the specific parameter will not be applied<br>



## Get a specific product: `[GET]/product?id`<br>

Required query parameters:
```
{
    id {integer} > 0
}
```
For any other data type/value an error will be returned.<br>




## Get all categories: `[GET]/product/categories`<br>

Returns a list of all categories<br>



## Get products of a specific category: `[GET]/product/:category?limit&sort`<br>

Required parameter:
```
{
    category {string} "electronics"/"jewelery"/"men's clothing"/"women's clothing"
}
```

Optional query parameters:
```
{
    limit {integer} > 0
    sort {string} "desc"
}
```
Value for category must be one of mentioned values in example. For any value/data type not mentioned in optional query, the specific feature will not be applied<br>



## Add new product: `[POST]/product/add`<br>

Required body parameter:
```
{
    "token": "eyJr389hbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9",
    "title": "test product",
    "price": 13.5,
    "description": "lorem ipsum set",
    "image": "https://i.pravatar.cc",
    "category": "electronics"
}

```

Only administrators can add new items, but in this example the token will return administrator role. All parameters are required. Category must be one mentioned in above endpoint, otherwise it will return an error<br>



## Delete product: `[DELETE]/product/:id`<br>

Required body parameter:
```
{
    "token": "eyJr389hbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9"
}

```

Required paramater:
```
{
    id {integer} > 0
}
```

Only administrators can delete items, but in this example the token will return administrator role.<br>



## Update product: `[PATCH]/product/:id`<br>

Required body parameter:
```
{
    "token": "eyJr389hbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9",
    "title": "test product",
    "price": 13.5,
    "description": "lorem ipsum set",
    "image": "https://i.pravatar.cc",
    "category": "electronics"
}
```

Required paramater:
```
{
    id {integer} > 0
}
```

Only administrators can update items, but in this example the token will return administrator role.<br>

## Cart
<hr>

## Get all carts: `[POST]/cart/all?limit&sort&startdate&enddate`<br>

Required body parameters:
```
{
    token: "eyJr389hbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9"
}
```

Optional query parameters:
```
{
    limit {integer} > 0
    sort {string} "desc"
    startdate {string} "yyyy-mm-dd"
    enddate {string} "yyyy-mm-dd"
}
```
Only administrators can view all carts, but for this case the token will return administrator role. For any other value/data type then the mentioned ones, it will return an error. Also starting date must be less than ending date<br>


## Get specific cart: `[POST]/cart/:id`<br>

Required body parameters:
```
{
    token: "eyJr389hbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9"
}
```

Requried parameters:
```
{
    id {integer} > 0
}
```
Only administrators can view a specific cart, but for this case the token will return administrator role. For any other value/data type then the mentioned ones, it will return an error.<br>


## Get user's cart: `[POST]/cart/`<br>

Required body parameters:
```
{
    token: "eyJr389hbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9"
}
```

For this case, token will return `Fakestoreapi.com`'s userId example. Endpoint will return the cart for that specific `userId`<br>


## Create new cart: `[PUT]/cart/`<br>

Required body parameters:
```
{
    token: "eyJr389hbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9",
    products {list<jsonObject>}: [
        {
            productId: 2,
            quantity: 1
        }
    ] 
}
```

Token required to get `userId`. Using that value, a new cart will be created adding sent products<br>



## Update cart: `[PATCH]/cart/:id`<br>

Required body parameters:
```
{
    token: "eyJr389hbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9",
    products {list<jsonObject>}: [
        {
            productId: 2,
            quantity: 1
        }
    ]
}
```

Required parameters:
```
{
    id {integer} > 0
}
```

Token used to get an `userId` (Fakestoreapi.com's example). Sent `cartId` will be checked against user's carts. If user doesn't have the cart, an error will be returned. Cart is fetched and updated with sent information.<br>


## Delete cart: `[DELETE]/cart/:id`<br>

Required body parameters:
```
{
    token: "eyJr389hbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9",
    products {list<jsonObject>}: [
        {
            productId: 2,
            quantity: 1
        }
    ]
}
```

Required parameters:
```
{
    id {integer} > 0
}
```

Token used to get an `userId` (Fakestoreapi.com's example). Sent `cartId` will be checked against user's carts. If user doesn't have the cart, an error will be returned. Cart will be deleted.<br>


