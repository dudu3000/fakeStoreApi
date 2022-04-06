class CartErrorHandler extends Error{

    constructor(message, code){
        super(message);
        this.name = message;
        this.code = code;
    }

}

module.exports = CartErrorHandler