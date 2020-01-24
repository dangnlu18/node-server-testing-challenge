const db = require('../db-config')

function getUsers(){
    return db('users')
}

function getUsersById(id){
    return db('users').where({ id }).first()
}

async function add(user){
   const [id] = await db('users').insert(user)
   return getUsersById(id)
}

async function updateUser(id, payload){
    await db('users').where({id}).update(payload)
    return getUsersById(id)
}

function remove(id){
    return db('users').where({id}).del()
}

module.exports ={
    getUsers,
    getUsersById,
    add,
    updateUser,
    remove,
}