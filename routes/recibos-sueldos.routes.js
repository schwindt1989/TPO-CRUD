const controller = require('../controllers/recibos-sueldos.controller')

module.exports = function(app) {
    app.get('/recibos-sueldos', controller.GetAllReciboSueldos)
    app.post('/recibos-sueldos', controller.CreateReciboSueldo)
    app.get('/recibos-sueldos/:id', controller.GetOneReciboSueldo)
    app.put('/recibos-sueldos/:id', controller.UpdateReciboSueldo)
    app.delete('/recibos-sueldos/:id', controller.DeleteReciboSueldo)
}