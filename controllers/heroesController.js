const fs = require('fs');

const heroes = JSON.parse(fs.readFileSync('./data/heroes.json', 'utf-8'));

module.exports = {
    listar: (req, res) => {
        // Ruta /heroes ➝ se envía todo el array y Express lo parsea para el browser como JSON :D
        res.send(heroes);
    },
    detalle: (req, res) => {
        // Ruta /heroes/n ➝ se envía el nombre y profesión del héroe solicitado
        let id = req.params.idHeroe

        // Acá lo primero será encontrar al héroe que corresponda
        let heroe = heroes.filter((heroe) => {
            return heroe.id == id
        });

        let heroeSeleccionado = heroe[0];

        if (heroeSeleccionado == undefined) {
            res.send('Heroe no encontrado')
        } else {
            res.send(`Hola, mi nombre es ${heroeSeleccionado.nombre} y soy ${heroeSeleccionado.profesion}`)
        }
    },
    bio: (req, res) => {
        let id = req.params.id;
        let ok = req.params.ok;
        // Acá lo primero será encontrar al héroe que corresponda

        let heroe = heroes.filter((heroe) => {
            return heroe.id == id
        });

        let heroeSeleccionado = heroe[0];

        if (heroeSeleccionado == undefined) {
            return res.send('no se encontro heroe')
        }

        if (ok == 'ok') {
            return res.send(`${heroeSeleccionado.nombre}: ${heroeSeleccionado.resenia}`)
        } else {
            return res.send(`${heroeSeleccionado.nombre}. Lamento que no desees saber mas de mi :(`)
        }
    }
}