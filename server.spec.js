const request = require('supertest');
const server = require('./server')
const db = require('./data/dbConfig.js')

afterEach(async () => {
    await db('games').truncate();
});

describe('server.js', ()=>{
    describe('Write tests to verify that the POST endpoint returns the correct HTTP status code when receiving correct and incorrect game data.', ()=>{
        it('Should return status 201 when new game is submitted correctly', async()=>{
            const result = await request(server).post('/api/games')
            .send({title: 'Belote', genre: 'Card Game', releaseYear: 1942})
            expect(result.status).toBe(201);
        });
        it ('Should return status 422 if information is incomplete', async () => {
            const result = await request (server).post ('/api/games')
            .send ({genre: 'Card Game',});
            expect (result.status).toBe (422);
        });
        it('Should still return status 201 if releaseYear is missing, as this is not a required field', async()=>{
            const result = await request(server).post('/api/games')
            .send({title: 'Belote', genre: 'Card Game'})
            expect(result.status).toBe(201);
        });

    })
    describe('he GET /games endpoint should return the list of games and HTTP status code 200',()=>{
        it('make sure this endpoint always returns an array, even if there are no games stored. If there are no games to return, the endpoint should return an empty array',async ()=>{
            const result = await request(server).get ('/api/games');
            expect (Array.isArray(result.body)).toBeTruthy()
        })
        it('should return status code 200', async()=>{
            const result = await request(server).get('/api/games');
            expect(result.status).toBe(200)
        })
        it('should return the list of games',async()=>{
            const result = await request(server).post('/api/games')
            .send({ title: 'Pinochle', genre: 'Card Game', releaseYear: 1852 })
            const result = await request(server).get('/api/games')
            const expected = [{ id: 4, title: 'Pinochle', genre: 'Card Game', releaseYear: 1852 }]
            expect(result.body).toEqual(expected)
        })
    })
})