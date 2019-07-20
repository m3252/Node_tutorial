const http = require('http');
const express = require('express');
const app = express();
const cors = require('cors');
const router = express.Router();
const socketIo = require('socket.io');


app.use(cors());
app.use('/', router);

const server = http.createServer(app);
server.listen(3000, () => {
   console.log('3000 connect'); 
});

const io = socketIo.listen(server);

io.sockets.on('connect', (socket) => {
    console.log('socket connect'); 
    
    socket.on('message', (data) => {
        console.log(data);
        socket.emit('message', data);
    });
});