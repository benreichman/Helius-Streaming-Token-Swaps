require('dotenv').config();

const express = require('express');
const bodyParser = require('body-parser');
const http = require('http');
const socketIO = require('socket.io');
const app = express();
const server = http.createServer(app);
const io = socketIO(server);
const port = process.env.PORT || 3000;

app.use(bodyParser.json());

app.post('/webhook', (request, response) => {
    const requestBody = request.body;
    io.emit('event', requestBody);
    response.status(200).send('Webhook Request Received!');
});

io.on('connection', (socket) => {
    console.log('Client connected');
  
    socket.on('disconnect', () => {
      console.log('Client disconnected');
    });
  });
  

server.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});