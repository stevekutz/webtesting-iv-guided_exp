// ADD THIS !!!
// const server  = require('../api/server');
const db = require('../data/dbConfig');

// define data access file
const Hobbits = require('./hobbitsModel');

// NOT NEEDED becuase we are not testing endpont, we are testing db methods
// const request = require('supertest');



describe(` hobbits db tests !!!! `, () => {
    
    describe('should insert hobbits into the db',  () => {
        it(' should return insert some hobbits', async () => {
            // using model methods
            await Hobbits.insert({name : 'Sam'});
            await Hobbits.insert({name : 'Frodo'});

            // confirm with knex
            const hobbits = await db('hobbits');

            expect(hobbits).toHaveLength(2);
            expect(hobbits[0].name).toBe('Sam');
        });

    });
    
});