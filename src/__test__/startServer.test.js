import {startServer} from '../server/index'

describe('Check The function', () => {
    it('True if getData function is defined', () => {
        expect(startServer).toBeDefined();
    });

    it('True if getData is a function', () => {
        expect(typeof startServer).toBe('function');
    });
})



// import {startServer} from '../server/index';
//
// describe('Try if server responds to url request', () => {
//     test('Page response code is OK.', () => {
//         expect(startServer).toBeDefined();
//     });
// });

// describe('Test root path', () => {
//     test('It should response the GET method', async () => {
//         const response = await request(app).get('/');
//         expect(response.statusCode).toBe(200);
//     });
// });
