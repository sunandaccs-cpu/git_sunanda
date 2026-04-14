const express=require("express");
const app=express();

// if(req.url==="/" && req.method==="GET")

// app.get("/",(req,res)=>{
//     res.send("this is my home page");
// });

// app.get("/about",(req,res)=>{
//     res.send("this is about page");
// })
// app.use((req,res)=>{
//     res.status(404).send("page not found");
// })
app.get("/user/:id",(req,res)=>{
    const userId=req.params.id;
    res.send(`user id is ${userId}`);
});

app.listen(3000,()=>{
    console.log(`server is running at address http://localhost:3000/user/21`);
});