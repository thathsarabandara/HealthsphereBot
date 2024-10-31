// app.js
const express = require('express');
const http = require('http');
const socketIO = require('socket.io');
const { initializeSocket } = require('./config/socket');

const app = express();
const server = http.createServer(app);
const io = socketIO(server);

// Serve static files
app.use(express.static('public'));

// Initialize Socket.IO
initializeSocket(io);

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/views/index.html');
});

const PORT = process.env.PORT || 3004;
server.listen(PORT, () => console.log(`Server running on port ${PORT}`));
