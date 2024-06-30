const express = require("express");
const bodyParser = require("body-parser");

const routesEmpleados = require("./routes/empleados.routes");
const routesCategorias = require("./routes/categorias.routes");
const routesReciboSueldos = require("./routes/recibos-sueldos.routes");

const app = express();
const port = 3000;

app.use(bodyParser.json());

routesEmpleados(app);
routesCategorias(app);
routesReciboSueldos(app);

// Iniciar el servidor
app.listen(port, () => {
  console.log(`Servidor iniciado en el puerto ${port}`);
});
