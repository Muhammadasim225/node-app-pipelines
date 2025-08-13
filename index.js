const express=require('express');
const app=express();
app.use(express.json())
app.get('/',(req,res)=>{
    res.send("Hello World")
})
app.get('/route',(req,res)=>{
    res.send("This is Route File...")
})
const port=3000
app.listen(port,()=>{
    console.log(`The port is listening on ${port} and url is http://localhost:${port}`);
})