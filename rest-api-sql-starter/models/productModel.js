const db = require('../config/db');

exports.getAllProducts = async () => {
    const [rows] = await db.query('SELECT * FROM products');
    return rows;
};

exports.getProductById = async (id) => {
    const [rows] = await db.query('SELECT * FROM products WHERE id = ?', [id]);
    return rows[0];
}

exports.createProduct = async (title, price) => {
    const [result] = await db.query('INSERT INTO products (title, price) VALUES (?, ?)', [title, price]);
    return {id: result.insertId, title, price};
}

exports.deleteProduct = async (id) => {
    const [result] = await db.query('DELETE FROM products WHERE id = ?', [id]);
    return result.affectedRows > 0;
}