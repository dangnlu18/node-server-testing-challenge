const supertest = require('supertest')
const server = require('./index')

describe('testing index routes', ()=>{
    test('welcome route', async ()=>{
        const res = await supertest(server).get('/')
        expect(res.status).toBe(200)
        expect(res.type).toBe('application/json')
        expect(res.body.message).toMatch(/welcome/i)
    })

    test('api endpoints', async ()=>{
        const res = await supertest(server).get('/api')
        expect(res.status).toBe(200)
    })

    test('creat user route', async () =>{
        const res = await supertest(server)
            .post('/api')
            .send({username:'timmy', password:'bca123'})
        expect(res.status).toBe(201)
        expect(res.type).toBe('application/json')
        expect(res.body).toEqual({id: 4, username: 'timmy', password:'bca123'})
    })
})




