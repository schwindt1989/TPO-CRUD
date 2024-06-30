const db = require('../configs/database')

async function CreateReciboSueldo(req, res) {
    const sql = 'INSERT INTO recibos_sueldos (mes, anio, sueldo, empleado_id) VALUES($1, $2, $3, $4) RETURNING *';
    const values = [req.body.mes, req.body.anio, req.body.sueldo, req.body.empleado_id]   
    const result = await db.query(sql, values)
    res.json(result.rows[0]);
}

async function GetAllReciboSueldos(req, res) {
    const sql = 'SELECT rs.id, rs.mes, rs.anio, rs.sueldo, e.nombre, c.nombre as "cateogria" from recibos_sueldos rsleft join empleados e on rs.empleado_id = e.idleft join categorias c on e.categoria_id = c.id';
    const result = await db.query(sql)
    res.json(result.rows);
}

async function GetOneReciboSueldo(req, res) {
    const sql = 'SELECT rs.id, rs.mes, rs.anio, rs.sueldo, e.nombre, c.nombre as "cateogria" from recibos_sueldos rsleft join empleados e on rs.empleado_id = e.idleft join categorias c on e.categoria_id = c.id WHERE rs.id = $1';
    const values = [req.params.id]
    const result = await db.query(sql, values)
    res.json(result.rows[0]);
}

async function UpdateReciboSueldo(req, res) {
    const sql = "UPDATE recibos_sueldos SET mes = $1, anio = $2, sueldo = $3 WHERE id = $4 RETURNING *";
    const values = [req.body.mes, req.body.anio,req.body.sueldo, req.params.id]
    const result = await db.query(sql, values)
    res.json(result.rows[0]);
}

async function DeleteReciboSueldo(req, res) {
    const sql = "DELETE FROM recibos_sueldos WHERE id = $1 RETURNING *";
    const values = [req.params.id]
    const result = await db.query(sql, values)
    res.json(result.rows[0]);
}

module.exports = {
    CreateReciboSueldo,
    GetAllReciboSueldos,
    GetOneReciboSueldo,
    UpdateReciboSueldo,
    DeleteReciboSueldo,
}