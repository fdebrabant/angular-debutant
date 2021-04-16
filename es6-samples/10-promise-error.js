import {
  getProductId,
  getProductPrice
} from './10-promise-lib';

getProductId()
  .then(getProductPrice)
  .then(price => console.log(`Product price is ${price}`))
  .catch(console.error);