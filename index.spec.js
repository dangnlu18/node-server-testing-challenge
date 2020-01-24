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
})




