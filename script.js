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

//created subclass PerishableProductProperties that will inherit properties from class ProductProperties
class PerishableProductProperties extends ProductProperties {
    constructor(name, price, quantity, expirationDate) {//added a new propertiy expirationDate to already exisiting properties
    
    }
}