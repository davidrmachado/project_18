const salesModel = require('../models/sales.model');

const getSales = async () => {
  const results = await salesModel.getAllSales();

  return results;
};

const getSaleById = async (id) => {
  const results = await salesModel.getSalesByID(id);

  if (!results) {
    return { message: 'Sale not found' };
  }
  return results;
};

module.exports = {
  getSales,
  getSaleById,
};
