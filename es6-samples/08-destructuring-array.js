'use strict';

const items = [2, 4, 8];
let [ a, b, c, d = 16, e] = items;

console.log(a, b, c, d, e);

[a, b] = [c, d];
console.log(a, b, c, d, e);