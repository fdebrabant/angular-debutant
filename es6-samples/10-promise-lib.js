
export function getProductId() {
  return new Promise((resolve) => {
    resolve(42);
  });
}

export function getProductOptions(productId) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        colors: ['blue', 'red', 'yellow']
      });
    }, 200);
  });
}

export function getProductStock(productId) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(1000);
    }, 200);
  });
}

export function getProductPrice(productId) {
  return new Promise((resolve, reject) => {
    reject('Method not yet implemented');
  });
}