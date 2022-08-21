const btnEmitir = document.querySelector('#btnEmitir');
const socket = io();


btnEmitir.addEventListener('click', () => {
    socket.emit('enviar-mensaje');
    btnEmitir.disabled = true;
});


socket.on('mensaje', (payload) => { 
    socket.emit('contador', payload)
});
