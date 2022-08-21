let votos={
    cont:0
};
const socketController = (socket) => {
   
    socket.on('enviar-mensaje', (payload,callback) => {
        socket.broadcast.emit('mensaje',payload);
    });


    socket.on('contador',(payload,callback) => {
        votos.cont++;
        console.log(votos);
    });
}

module.exports = {
    socketController
}