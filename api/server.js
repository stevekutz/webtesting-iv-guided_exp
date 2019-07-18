const express = require('express');
// blah
const Hobbits = require('../hobbits/hobbitsModel.js');

//define express app as server 
const server = express();

// mount middleware
server.use(express.json()); // parses req with JSON payloads

/*
// SANITY CHECK
server.get('/', (req, res) => {
 // res.status(200).json({ api: 'up' });
   	 // OR
  res.send(`<h2> Sanity HTML code here </h2>`);
});
*/

// sanity check
server.get('/', (req, res) => {
  res.cookie('sanityCookieHere', 'cookieForSanity');

  // res.status(200).json({message: ` sanity message`});
    // OR

   res.status(200)
   // OR  .send(`<h2> Sanity HTML code here </h2>`)
      .json({message: ` sanity message`});

})

/*
server.get('/hobbits', (req, res) => {
  Hobbits.getAll()
    // Promise sucesss, cb obj 'hobbits' passed to then
    .then(hobbits => {
      res.status(200).json(hobbits);
    }) 
    // Promise error, cb obj 'error 'passed into catch
    .catch(error => {
      res.status(500).json(error);
    });
});
*/

// async returns Promise, await receives Promise
server.get('/hobbits', async(req,res) => {

  try{
    const hobbits = await Hobbits.getAll()   // getAll >> return db('hobbits');
    res.status(200).json(hobbits);
  }
  catch (err){
    res.status(500).json(err);
  }
})

server.get('/hobbits/:id', async(req, res) => {
  const {id} = req.params;
  
  try{
    const hobbit = await Hobbits.findById(id);
    console.log('server promise Hobbit', hobbit)
     
    if(hobbit){
      res.status(200).json(hobbit)
    } else {
      res.status(451).json({
        message: `${id} not found`
      })
    }
  }
  catch (err) {
    res.status(500).json({
      message: `ERROR`
    });
  }
})



module.exports = server;
