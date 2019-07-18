const express = require('express');
// blah
const Hobbits = require('../hobbits/hobbitsModel.js');

//define express app as server 
const server = express();

server.use(express.json());

server.get('/', (req, res) => {
 // res.status(200).json({ api: 'up' });
   	 // OR
  res.send(`<h2> Sanity HTML code here </h2>`);
});

server.get('/hobbits', (req, res) => {
  Hobbits.getAll()
    .then(hobbits => {
      res.status(200).json(hobbits);
    })
    .catch(error => {
      res.status(500).json(error);
    });
});

module.exports = server;
