const express = require('express');
const app = express();
const port = 5000;

// Middleware
app.use(express.json());

// Rutas
app.get('/', (req, res) => {
    res.send('¡Hola desde el backend!');
});

//Usar cors para evitar conflictos de comunicación
const cors = require("cors");
app.use(
  cors({
    // Ruta del FrontEnd
    origin: ["http://localhost:5173"],
    methods: ["GET", "POST", "PUT", "DELETE"],
  })
);

// Middleware para permitir métodos adicionales en las solicitudes
app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });

// Iniciar el servidor
app.listen(port, () => {
    console.log(`Servidor corriendo en http://localhost:${port}`);
});
