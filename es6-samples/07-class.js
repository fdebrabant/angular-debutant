const taxRate = 1.2;
const minTaxRate = 1.1;

class Product {
    constructor(label, price) {
        this.lalel = label;
        this.price = price;
    }

    get taxRate() {
        return taxRate;
    }

    priceVat() {
        return this.price * this.taxRate;
    }
}

class Screen extends Product {
    constructor(label, price, size) {
        super(label, price);
        this.size = size;
    }

    get taxRate() {
        return minTaxRate;
    }
}

const computer = new Product('Super computer', 2000);
const screen = new Screen('Super screen', 300, '28 inches');

console.log(computer.priceVat());
console.log(screen.priceVat());