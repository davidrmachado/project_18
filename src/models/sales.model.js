const camelize = require('camelize');
const connection = require('./connection');

const getAllSales = async () => {
  const [results] = await connection.execute(
    `SELECT s.sale_id , sales.date, s.product_id, s.quantity
    FROM sales_products AS s
    INNER JOIN sales ON sales.id = s.sale_id;`,
  );
  return camelize(results);
};

const getSalesByID = async (id) => {
  const [results] = await connection.execute(
    `SELECT sales.date, s.product_id, s.quantity FROM sales_products AS s
    INNER JOIN sales ON sales.id = s.sale_id
    WHERE s.sale_id = ?;`, [id],
  );
  return camelize(results);
};

module.exports = {
  getAllSales,
  getSalesByID,
};
