const express = require('express');
const cors = require('cors');

class Server {
    constructor() {
        this.app  = express();
        this.port = process.env.PORT;
        
        this.paths = {
            cleaner: '/api/',
        };

        // Middlewares
        this.middlewares();

        // Rutas de mi aplicacion
        // this.routes();
    }

    middlewares() {
        // CORS
        this.app.use( cors() );

        // Lectura y parseo del body
        this.app.use( express.json({limit: '50mb'}) );

        // Directorio publico
        this.app.use( express.static('public') );

    }

    // routes() {
    //     this.app.use(this.paths.cleaner, require('../routes/cleaner'));
    // }

    listen() {
        this.app.listen( this.port, () => {
            console.log('Servidor corriendo en el puerto', this.port);
        });        
    }

}

module.exports = Server;
