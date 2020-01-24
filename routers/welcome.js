const express = require('express')
const router = express.Router()

router.get('/', async (req,res,next)=>{
    res.json({message:'welcome'})
})

module.exports = router