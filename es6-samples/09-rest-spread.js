'use strict';

const values = [88, 76, 21, 56, 12, 941, 15];

// Rest params
(function displayParams(one, two, ...params) {
    console.log(one, two, ...params);
    console.log(one, two, params);
})(...values);

// spread operator
console.log(Math.min(...values));

