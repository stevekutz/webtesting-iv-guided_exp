// ADD THIS !!!
const server  = require('../api/server');

// THEN ADD THIS !!!
const supertest = require('supertest');


// this NEEDS TO BE FIXED !!!!
describe(`'server tests !!!! `, () => {
    it(' should set up the test environment', () => {
        expect(process.env.DB_ENV).toBe('testing');


    });



});