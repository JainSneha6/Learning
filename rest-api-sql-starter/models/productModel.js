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

exports.updateProduct = async (id, title, price) => {
    const [result] = await db.query('UPDATE products SET title = ?, price = ? WHERE id = ?', [title, price, id]);
    return result.affectedRows > 0 ? {id, title, price} : null;
}

exports.deleteProduct = async (id) => {
    const [result] = await db.query('DELETE FROM products WHERE id = ?', [id]);
    return result.affectedRows > 0;
}