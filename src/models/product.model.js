const connection = require('./connection');

const getAllProduct = async () => {
  const [results] = await connection.execute(
    'SELECT * FROM products',
  );
  return results;
};

const getProductByID = async (id) => {
  const [[results]] = await connection.execute(
    'SELECT * FROM products WHERE id = ?', [id],
  );
  return results;
};

module.exports = {
  getAllProduct,
  getProductByID,
};
