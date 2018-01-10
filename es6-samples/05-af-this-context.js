'use strict';

class Numbers {
    constructor() {
        this.factor = 2;
        this.items = [1, 2, 3, 4, 5];
        this.multipliedItems = this.items.map((item) => {
            return item * this.factor;
        });
    }
}

const numbers = new Numbers();
console.log(numbers.multipliedItems);