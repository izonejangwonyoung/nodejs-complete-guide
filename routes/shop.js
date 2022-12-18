const express=require('express')
const path=require('path')
const router=express.Router()

const roodDir=require('../util/path')


router.get('/',(req, res, next)=>{
    res.sendFile(path.join(roodDir,'views','shop.html'))
})
module.exports=router