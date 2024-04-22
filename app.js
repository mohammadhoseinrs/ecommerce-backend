const express=require('express')


const app=express()


app.listen(3000,()=>{
    console.log('server is connected');
})

app.use('/',(req,res)=>{
    return res.json('localhost 3000')
})