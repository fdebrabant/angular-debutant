import {
  getProductId,
  getProductOptions
} from './10-promise-lib';

getProductId()
  .then(getProductOptions)
  .then(options => {
    console.log(options);
    return 'Options has been found';
  })
  .then(message => console.log(message));
