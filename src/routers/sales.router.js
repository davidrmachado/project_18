const express = require('express');

const salesController = require('../controllers/sales.controller');

const router = express.Router();

router.get('/', salesController.getAll);

router.get('/:id', salesController.getById);

module.exports = router;
