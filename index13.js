const express=require("express");
const app=express();

app.get("/",(req,res)=>{
    res.send("this is my home page");
});
app.get("/about",(req,res)=>{
    res.send("this is abut page")
})
app.use((req,res)=>{
    res.status("page not found");
})

app.listen(3000,()=>{
    console.log(`server is running at address http://localhost:3000`);
});