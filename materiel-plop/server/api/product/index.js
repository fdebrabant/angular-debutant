const express = require('express');
const router = express.Router();
const productListController = require('./productList.controller');

router.get('/', productListController.listAction);
router.get('/highlighted', productListController.listHighlightedAction);
router.get('/:id', productListController.getAction);

module.exports = router;
