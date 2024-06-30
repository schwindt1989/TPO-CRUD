const controller = require('../controllers/categorias.controller')

module.exports = function(app) {
    app.get('/categorias', controller.GetAllCategorias)
    app.post('/categorias', controller.CreateCategoria)
    app.get('/categorias/:id', controller.GetOneCategoria)
    app.put('/categorias/:id', controller.UpdateCategoria)
    app.delete('/categorias/:id', controller.DeleteCategoria)
}