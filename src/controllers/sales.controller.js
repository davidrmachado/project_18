const salesService = require('../services/sales.service');

const getAll = async (_req, res) => {
  const results = await salesService.getSales();

  return res.status(200).json(results);
};

const getById = async (req, res) => {
  const { id } = req.params;
  const results = await salesService.getSaleById(id);

  if (results.length === 0) {
    return res.status(404).json({ message: 'Sale not found' });
  }
  return res.status(200).json(results);
};

module.exports = {
  getAll,
  getById,
};
