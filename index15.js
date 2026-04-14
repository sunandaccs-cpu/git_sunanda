const express=require("express");
const req = require("express/lib/request");
const app=express();
// app.get("/",(req,res)=>{
//     res.send("this is my home page");
// });
// app.get("about",(req,res)=>{
//     res.send("this is about page");
// })
// app.get("contact",(req,res)=>{
//     res.send("this is a contact page");
// })
// app.get("detail",(req,res)=>{
//     res.send("this is a detail page");
// })
// app.use((req,res)=>{
//     res.status(423).send(" page not found");
// })
app.get("/user/:id",(req,res)=>{
    const userId=req.params.id;
    res.send(`user id is ${userId}`);
})
app.get("/search",(req,res)=>{
    console.log(req.query);
    res.send(`my name is  ${req.query.name} and my branch is${req.query.branch}`);
});
app.listen(3000,()=>{
    console.log(`server is running  at address http://localhost:3000/search?name=sunanda&branch=CSE`)
})