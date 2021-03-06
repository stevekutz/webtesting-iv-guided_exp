const db = require('../data/dbConfig.js');

module.exports = {
  insert,
  update,
  remove,
  getAll,
  findById,
};

async function insert(hobbit) {
 // return db('hobbits').insert(hobbit); 
 
 const [id] = await db('hobbits').insert(hobbit);
  // this is jut like findById
  /*
  return db('hobbits')
    .where({id})
    .first();
  */
 return findById(id);
}

async function update(id, changes) {
  return null;
}

function remove(id) {
  return null;
}

function getAll() {
  return db('hobbits');
}


function findById(id) {
  return db('hobbits')
  .where({id})
  .first();
  
  /*  
  return db('hobbits')
    .where({id})
    .first();
  */
}
