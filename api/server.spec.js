// ADD THIS !!!
const server  = require('./server');

describe(`'server tests !!!! `, () => {
    it(' should set up the test environment', () => {
        expect(process.env.DB_ENV).toBe('testing');


    });



});