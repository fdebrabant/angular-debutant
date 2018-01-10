'use strict';

const user = {
    firstName: 'John',
    lastName: 'Doe',
    age: 32
};

const {firstName, lastName, age} = user;
console.log([firstName, lastName, age]);

(function introduce({firstName: a, lastName: b, favoriteColor: c = 'red'}) {
    console.log(`${a} ${b}`)
    console.log(`Favorite color is ${c}`)
})(user);