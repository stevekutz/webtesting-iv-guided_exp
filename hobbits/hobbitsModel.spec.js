// ADD THIS !!!
// const server  = require('../api/server');
const db = require('../data/dbConfig');

// define data access file
const Hobbits = require('./hobbitsModel');

// NOT NEEDED becuase we are not testing endpont, we are testing db methods
// const request = require('supertest');



describe(` hobbits db tests !!!! `, () => {
    
    describe('should insert hobbits into the db',  () => {
        // WE MUST clean up/reset db after each test
         beforeEach( async ()=> {   // ALSO WORKS  afterEach( async () =>
            await db('hobbits').truncate();
        });
      
        it(' should return insert some hobbits', async () => {
            // using model methods
            await Hobbits.insert({name : 'Sam'});
            await Hobbits.insert({name : 'Frodo'});

            // confirm with knex
            const hobbits = await db('hobbits');

            expect(hobbits).toHaveLength(2);
            expect(hobbits[0].name).toBe('Sam');
        });

        it('should return the new hobbit on insert' , async () => {
             const hobbit = await Hobbits.insert({name: 'Sam'});

             expect(hobbit).toEqual({id: 1, name: 'Sam'});
        });

    });
    
});