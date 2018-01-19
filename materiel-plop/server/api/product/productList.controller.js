module.exports = {
  getAction,
  listAction,
  listHighlightedAction
};

let products = [
  {
    id: 1,
    title: 'Surface Book',
    price: 1401,
    image: 'surface-book.jpg',
    rating: 5,
    review: 15
  },
  {
    id: 2,
    title: 'Macbook pro',
    price: 1699,
    image: 'macbook-pro.jpg',
    rating: 5,
    review: 10
  },
  {
    id: 3,
    title: 'Lenovo Yoga book',
    price: 579,
    image: 'lenovo-yoga-book.jpg',
    rating: 3,
    review: 3
  },
  {
    id: 4,
    title: 'Surface pro 4',
    price: 934,
    image: 'surface-pro-4.jpg',
    rating: 4,
    review: 20
  },
  {
    id: 5,
    title: 'Surface Studio',
    price: 2999,
    image: 'surface-studio.jpg',
    rating: 5,
    review: 30
  },
  {
    id: 6,
    title: 'iPad pro',
    price: 689,
    image: 'ipad-pro.png',
    rating: 3,
    review: 35
  },
  {
    id: 7,
    title: 'iMac',
    price: 1249,
    image: 'imac.jpg',
    rating: 4,
    review: 25
  }
];

function getAction(req, res, next) {
  const selectedProduct = products.reduce((current, product) => {
    return (product.id == req.params.id && !current) ? product : current;
  }, null);
  if (products) {
    res.json(selectedProduct);
  } else {
    res.status(404).end();
  }

}

function listAction(req, res, next) {
  res.json(products);
}

function listHighlightedAction(req, res, next) {
  res.json(products.slice(0, 3));
}
