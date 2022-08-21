const express = require('express');
const cors = require('cors');
const { socketController } = require('../sockets/controller');
const { log } = require('console');


class Server {

    constructor() {
        this.app = express();
        this.port = 3000;
        this.server = require('http').createServer(this.app);
        this.io = require('socket.io')(this.server);
        this.paths = {}

        // Middlewares
        this.middlewares();

        //Sockets
        this.sockets();
    }


    middlewares() {
        // CORS
        this.app.use(cors());

        // Directorio Público
        this.app.use(express.static('public'));
    }

    sockets() {
      //  this.io.on('connection', socketController);
        this.io.on('connection',socketController );
    }


    listen() {
        this.server.listen(this.port, () => {
            console.log('Servidor corriendo en puerto', this.port);
        })
    }
}
module.exports = Server;