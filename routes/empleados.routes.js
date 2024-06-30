const controller = require('../controllers/empleados.controller')

module.exports = function(app) {
    app.get('/empleados', controller.GetAllEmpleados)
    app.post('/empleados', controller.CreateEmpleado)
    app.get('/empleados/:id', controller.GetOneEmpleado)
    app.put('/empleados/:id', controller.UpdateEmpleado)
    app.delete('/empleados/:id', controller.DeleteEmpleado)
}