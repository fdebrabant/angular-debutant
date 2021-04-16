import {
  getProductOptions,
  getProductStock
} from './10-promise-lib';

const productId = 10;
Promise
  .all([
    getProductOptions(productId),
    getProductStock(productId)
  ])
  .then(promisesResults => {
    console.log(promisesResults);
  });