const express=require('express');
const app=express();
const port=3000;

const loggingMiddleware=(req,res,next)=>{
    console.log(req);
    next();
}
app.use(loggingMiddleware);

app.get('/',(req,res) =>{
    res.send('Hello World!');
})

app.listen(port);