const express = require('express');
const server = express();
const cors = require('cors');

server.use(cors());
server.use(express.json());

const userRoutes =  require('./routes/usersRoutes')
server.use('/users', userRoutes);

server.get('/', (req, res) => res.json({ message: 'Welcome' }));

module.exports = server;

