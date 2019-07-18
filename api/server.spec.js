// ADD THIS !!!
const server  = require('./server');

// THEN ADD THIS !!!
const request = require('supertest');

describe(`'server tests !!!! `, () => {
    it(' should set up the test environment', () => {
        expect(process.env.DB_ENV).toBe('testing');
    });


    
    describe('verify GET / returns SANITY CHECK with 200 status' , () => {
        const expectedStatusCode_200 = 200;
        const expectedBody = {message: ` sanity message`};

        it(`should return by 200 using Promise .then`, () => {
            let response;
            return request(server)
                .get('/')
                .then(res => {
                    response = res;

                    expect(response.status).toEqual(expectedStatusCode_200);
                    expect(response.body).toEqual(expectedBody);
                })

        })

        it('should return 200 using Promise async/await', async () => {
            const expectedBody = {message: ` sanity message`};
            
            const response = await request(server)
            
                .get('/')    
                expect(response.status).toBe(200);
                expect(response.body).toEqual(expectedBody);
        })

    })
    

    describe('/GET', () => {
        it('should return 200', () => {
            return request(server)
                .get('/')
                .then(res => {
                    expect(res.status).toBe(200);
                })
        })
    })

});