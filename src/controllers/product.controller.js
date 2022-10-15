const productService = require('../services');

const getAll = async (_req, res) => {
  const results = await productService.getAll();
  return res.status(200).json(results);
};

const getById = async (req, res) => {
  const { id } = req.params;
  const results = await productService.getById(id);

  if (!results) {
    return res.status(404).json({ message: 'Product not found' });
  }
  return res.status(200).json(results);
};

const postProduct = async (req, res) => {
  const { name: product } = req.body;
  const addedProduct = await productService.addProduct(product);

  return res.status(201).json({ id: addedProduct, name: product });
};

module.exports = {
  getAll,
  getById,
  postProduct,
};
