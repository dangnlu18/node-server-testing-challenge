const express = require('express');
const dbConfig = require('./db-config')
const welcomeRouter = require('./routers/welcome')
const userRouter = require('./routers/users-router')



const server = express();
server.use(express.json());

server.use('/', welcomeRouter)
server.use('/api', userRouter)

server.use((err, req, res, next)=>{
    console.log(err)
    res.status(500).json({message:'something went wrong'})
})


module.exports = server;