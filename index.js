import express from 'express';
import { createServer } from 'node:http';
import { Server } from 'socket.io';

const app = express();
const server = createServer(app);
const socketio = new Server(server);

app.get('/', (req, res) => {
  res.send('<h1>Tambalin Websocket</h1>');
});

socketio.on('connection', (socket) => {
  console.log('a user connected');
});


server.listen(8080, () => {
  console.log('server running at http://localhost:8080');
});