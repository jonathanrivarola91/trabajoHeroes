const express = require('express');

const router = express.Router();

const heroesController = require('../controllers/heroesController')

// Ruta Raíz / ➝ Home
router.get('/' , heroesController.listar)

router.get('/detalle/:idHeroe', heroesController.detalle)

router.get('/bio/:id/:ok?', heroesController.bio) 


module.exports = router