const db = require('../configs/database')

// Ruta para crear un nuevo empleado

async function CreateEmpleado(req, res) {
    const sql = 'INSERT INTO empleados (nombre, categoria_id) VALUES($1, $2) RETURNING *';
    const values = [req.body.nombre, req.body.categoria_id]   
    const result = await db.query(sql, values)
    res.json(result.rows[0]);
}

// Ruta para obtener todos los empleados

async function GetAllEmpleados(req, res) {
    const sql = 'SELECT  e.id, e.nombre, c.nombre as "categoria" FROM empleados e LEFT JOIN categorias c ON e.categoria_id = c.id';
    const result = await db.query(sql)
    res.json(result.rows);
}

// Ruta para obtener un empleado por ID

async function GetOneEmpleado(req, res) {
    const sql = 'SELECT  e.id, e.nombre, c.nombre as "categoria" FROM empleados e LEFT JOIN categorias c ON e.categoria_id = c.id WHERE e.id = $1';
    const values = [req.params.id]
    const result = await db.query(sql, values)
    res.json(result.rows[0]);
}

// Ruta para actualizar un empleado

async function UpdateEmpleado(req, res) {
    const sql = "UPDATE empleados SET nombre = $1, categoria_id = $2 WHERE id = $3 RETURNING *";
    const values = [req.body.nombre, req.body.categoria_id, req.params.id]
    const result = await db.query(sql, values)
    res.json(result.rows[0]);
}

// Ruta para eliminar un empleado

async function DeleteEmpleado(req, res) {
    const sql = "DELETE FROM empleados WHERE id = $1 RETURNING *";
    const values = [req.params.id]
    const result = await db.query(sql, values)
    res.json(result.rows[0]);
}

module.exports = {
    CreateEmpleado,
    GetAllEmpleados,
    GetOneEmpleado,
    UpdateEmpleado,
    DeleteEmpleado,
}