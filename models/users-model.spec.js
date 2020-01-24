const userModel = require('./users-model')
const db = require('../db-config')

beforeEach(async ()=>{
    await db.seed.run()
})

describe('users model', ()=>{
    test('find users by ID', async ()=>{
        const res = await userModel.getUsersById(1)
        expect(res.username).toBe('dang')
    })

    test('get all users', async ()=>{
        const res = await userModel.getUsers()
        expect(res).toHaveLength(3)
    })


    // test('add user', async ()=>{
    //    const res = await userModel.add({username: 'steveoo', password:'abc321' })
    //    const users = await db('users').select()
    //    expect(users).toHaveLength(4)
    // })

    test('update user', async ()=>{
        const res = await userModel.updateUser(1, {username: 'tommy',password:'dfads'})
        expect(res.username).toBe('tommy')
    })


    test('delete user', async ()=>{
        const res = await userModel.remove(1)
        const users = await db('users').select()
        expect(users).toHaveLength(2)
    })
})