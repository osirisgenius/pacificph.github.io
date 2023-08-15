const express = require('express');
const app = express();
const http = require('http');
const server = http.createServer(app);
const path = require('path');
const { Server } = require("socket.io");
const io = new Server(server);


app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/public/client.html');
});

app.get('/admin', (req, res) => {
  res.sendFile(__dirname + '/public/admin.html');
});

// Connection Log
io.on('connection', (socket) => {
    console.log('a user connected');
    socket.on('disconnect', () => {
      console.log('user disconnected');
    });
  });

  // Emit Message
  io.on('connection', (socket) => {
    socket.on('send-chat-message', (msg) => {
      console.log('message: ' + msg);
      io.emit('send-chat-message', msg);
    });
  });

server.listen(3000, () => {
    console.log('listening on *:3000');
});