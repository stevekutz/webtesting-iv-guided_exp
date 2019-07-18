// ADD THIS !!!
const server  = require('../api/server');
const db = require('../data/dbConfig');

// define data access file
const Hobbits = require('./hobbitsModel');

// NEEDED when we are  testing endponts, not needed when we are testing db methods
 const request = require('supertest');

 const someHobbits =   [
    {name: 'Sam'},
    {name: 'Frodo'},
    {name: 'Sparky'}
    ]; 

const testHobbits = someHobbits.map( (hobbit, i) => {
    return {id:i + 1, name: hobbit.name};
})    

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

        it('should return hobbit by id', async () => {
      
/*
            beforeEach( async ()=> {   // ALSO WORKS  afterEach( async () =>
                await db('hobbits').truncate();
            });
*/            
            //  DONT DO THIS, we want to keep testing modular and 'insert' inside here
                    // add some hobbits
            /*
            await Hobbits.insert({name : 'Sam'});
            await Hobbits.insert({name : 'Frodo'});
            await Hobbits.insert({name : 'Sparky'});
            */
         
            await db('hobbits').insert([
                {name: 'Sam'},
                {name: 'Frodo'},
                {name: 'Sparky'}
            ]);    
            
            const allHobbits = await db('hobbits');
            console.log('>>>>>>>>>> ', allHobbits);
            console.log('>>>>>>>> ', allHobbits[0].name )

            const hobbit = await Hobbits.findById(3);
            console.log('>>', hobbit);

            expect(hobbit.name).toBe('Sparky');  // must have first() in model
            //
        })

        it('returns null on invalid id', async () => {
                // REMEMBER that we reset db before each test
                const hobbit = await Hobbits.findById(0);

                expect(hobbit).toBeUndefined();
        })

        it('should hit hobbits endpoint', async () => {
                const res = await request(server).get('/hobbits');
                expect(res.status).toBe(200);
                expect(res.body).toEqual([]);
        })

        it('should return all hobbits in db', async () => {
            await db('hobbits').insert(someHobbits);

            const res = await request(server).get('/hobbits');
            expect(res.status).toBe(200);
            expect(res.body).toEqual(testHobbits);
        });
    });
    
});