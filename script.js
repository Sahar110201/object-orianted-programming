//Lab 10
//part 1
//will be using class to create a class
class ProductProperties { //created the base class
    constructor(name, price, quantity) { //added a method constructor and also added the three initial properties name, price and quantity
        this.name = name; //name of product
        this.price = price; //price of product
        this.quantity = quantity; //quantity available in stock
    }
    getTotalValue() { //this returns the total vaule of products in stock by multiplying price with quantity
        return this.price * this.quantity;
    }
    toString() { //this returns the string representation or rather product description 
        return `Product: ${this.name}, Price: $${this.price}, ${this.quantity}`;
    }
    //part 3
    static applyDiscount(products, discount) { //added static method. You made a typo in in your instructions with the wrong class name. 
        products.forEach(product => {
            product.price = product.price * (1 - discount); //reduced price by discount percentage
        });
    }
}

//part 2
//created subclass PerishableProductProperties that will inherit properties from class ProductProperties
class PerishableProductProperties extends ProductProperties {
    constructor(name, price, quantity, expirationDate) {//added a new propertiy expirationDate to already exisiting properties
    super(name, price, quantity)//calling super() method constructor
    this.expirationDate = expirationDate } //new propertity for products that expire
    toString() { //overriding the toString() in order to include expiration date
        return `Product: ${this.name}, Price: $${this.price}, ${this.quantity}, Expiration Date: ${this.expirationDate}`;
    }     
}
//two instances of class with simple data
const maggie = new PerishableProductProperties( //new used to create instance
    "Maggie", //name of product
    1.00, //product price
    50, //product quantity
    "2026-03-18", //expiration date
)
const milk = new PerishableProductProperties( //new used to create instance
    "Milk", //name of product
    15.00, //product price
    100, //product quantity
    "2026-01-21", //expiration date
)
//using console.log to display the objects using toString()
console.log(maggie.toString());
console.log(milk.toString());

//part 3
const products = [maggie, milk]; //array of products
ProductProperties,applyDiscount(products, 0.1); //applying 10% discount
