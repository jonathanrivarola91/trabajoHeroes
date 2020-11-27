// Require de Express
const express = require('express');

// Require de FS
const fs = require('fs');

// Ejecución de Express
const app = express();

// Levantando el Servidor en el puerto 3030
app.listen(3030, () => console.log('Server running in 3030 port'));

// Leyendo y parseando (en array) el contenido de heroes.json
const heroes = JSON.parse(fs.readFileSync('./data/heroes.json', 'utf-8'));

const mainRouter = require('./routes/main');
const heroesRouter = require('./routes/heroes');

// Ruta Raíz / ➝ Home
app.use('/' , mainRouter);

app.use('/heroes' , heroesRouter)

app.use(function (req, res) {
    res.status(404);
    res.send('404 not found. <br> ¡Houston, poseemos problemas!');
    });

