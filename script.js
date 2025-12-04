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
const maggie = new PerishableProductProperties(
    "Maggie",
    1.00,
    50,
    "2026-03-18",
)
const milk = new PerishableProductProperties(
    "Milk",
    15.00,
    100,
    "2026-01-21",
)