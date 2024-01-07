const io = require('socket.io-client');

const socket = io(process.env.SERVER_URL);  // Replace with your server URL

socket.on('event', (data) => {
  console.log('Received event:', data);
});

socket.on('disconnect', () => {
  console.log('Disconnected from the server');
});

// Handle errors
socket.on('error', (error) => {
  console.error('Socket error:', error);
});
