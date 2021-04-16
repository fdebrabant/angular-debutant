class Product {
    constructor(public price: number) {}
}

class Cart {

    private products: Array<Product> = [];
    private amount: number;

    add(product: Product): void {
        this.products.push(product);
        this.update();
    }

    protected update(): void {
        this.amount = 0;
        this.products.forEach((product) => this.amount += product.price);
    }

    getAmount() {
        return this.amount;
    }
}

const product = new Product(10);
const cart = new Cart();
cart.add(product);
console.log(cart.getAmount());