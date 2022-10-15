const productModel = require('../models');

const getAll = async () => {
  const results = await productModel.getAllProduct();
  return results;
};

const getById = async (id) => {
  const results = await productModel.getProductByID(id);
  return results;
};

const addProduct = async (product) => {
  const createProduct = await productModel.postProduct(product);
  return createProduct;
};

module.exports = {
  getAll,
  getById,
  addProduct,
};
