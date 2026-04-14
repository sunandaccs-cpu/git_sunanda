const express=require("express");


 const app=express();

app.use((req,res,next)=>{
    console.log("this will run for every request");
    console.log(`Requested URL:${req.url}`);
    next();

});
app.get("/",(req,res)=>{
    res.send("Hello World !!😒");

});
app.listen(3000,()=>{
    console.log(`server is running  at address http://localhost:3000`)

})