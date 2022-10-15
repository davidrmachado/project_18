const productModel = require('../models');

const getAll = async () => {
  const results = await productModel.getAllProduct();
  return results;
};

const getById = async (id) => {
  const results = await productModel.getProductByID(id);
  return results;
};

module.exports = {
  getAll,
  getById,
};
