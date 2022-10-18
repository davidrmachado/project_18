const express = require('express');

const productController = require('../controllers');

const inputValidation = require('../middlewares');

const router = express.Router();

router.get('/', productController.getAll);

router.get('/:id', productController.getById);

router.post('/', inputValidation, productController.postProduct);

router.put('/:id', inputValidation, productController.updateProduct);

router.delete('/:id', productController.deleteProduct);

module.exports = router;
