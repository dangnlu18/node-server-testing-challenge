const express = require('express')
const router = express.Router({
    mergeParams: true,
})

const userModel = require('../models/users-model')

router.get('/', async (req,res,next)=>{
    try{
        res.json(await userModel.getUsers())
    }
    catch(err){
        next(err)
    }
})

router.get('/:id', async (req,res,next)=>{
    try{
        res.json(await userModel.getUsersById(req.params.id))
    }
    catch(err){
        next(err)
    }
})

router.post('/', async (req,res,next)=>{
    try{
        const user = req.body
        res.status(201).json(await userModel.add(user))
    }
    catch(err){
        next(err)
    }
})

router.put('/:id', async (req,res,next)=>{
    try{
        const user = req.body
        res.json(await userModel.updateUser(req.params.id, user))
    }
    catch(err){
        next(err)
    }
})

router.delete('/:id', async (req,res,next)=>{
    try{
        res.json(await userModel.remove(req.params.id))
    }
    catch(err){
        next(err)
    }
})

module.exports = router