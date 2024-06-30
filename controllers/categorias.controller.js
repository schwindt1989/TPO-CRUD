const db = require('../configs/database')

async function CreateCategoria(req, res) {
    const sql = 'INSERT INTO categorias (nombre) VALUES($1) RETURNING *';
    const values = [req.body.nombre]   
    const result = await db.query(sql, values)
    res.json(result.rows[0]);
}

async function GetAllCategorias(req, res) {
    const sql = 'SELECT * FROM categorias';
    const result = await db.query(sql)
    res.json(result.rows[0]);
}

async function GetOneCategoria(req, res) {
    const sql = "SELECT * FROM categorias WHERE id = $1";
    const values = [req.params.id]
    const result = await db.query(sql, values)
    res.json(result.rows);
}

async function UpdateCategoria(req, res) {
    const sql = "UPDATE categorias SET nombre = $1 WHERE id = $2 RETURNING *";
    const values = [req.body.nombre, req.params.id]
    const result = await db.query(sql, values)
    res.json(result.rows[0]);
}

async function DeleteCategoria(req, res) {
    const sql = "DELETE FROM categorias WHERE id = $1 RETURNING *";
    const values = [req.params.id]
    const result = await db.query(sql, values)
    res.json(result.rows[0]);
}

module.exports = {
    CreateCategoria,
    GetAllCategorias,
    GetOneCategoria,
    UpdateCategoria,
    DeleteCategoria,
}