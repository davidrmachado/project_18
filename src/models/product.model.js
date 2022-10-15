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

const postProduct = async (product) => {
  const [{ insertId }] = await connection.execute(
    'INSERT INTO products(name) VALUES(?)', [product],
  );
  return insertId;
};

module.exports = {
  getAllProduct,
  getProductByID,
  postProduct,
};
