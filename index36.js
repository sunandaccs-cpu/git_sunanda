const express=require("express");
const jwt=require("jsonwebtoken");
const app=express();
app.use(express.json());
app.post("/login",(req,res)=>{
    const user={
        id:1,
        name:"sunanda"

    };
    const token=JsonWebTokenError.sign(user,"mySecretKey");
    res.json({token});

});
function auth(req,res,next){
    const token=req.headers.authorization;
    //bearer token
    if(!token){
        return res.status(401).json({message:"token missing"});
    }
    try{
        const decoded=Jwt.verify(token,"mySecretKey");
        req.user=decoded;
        next();
    }
    catch{
        res.status(401).json({mesage:"invalid token"});
    }
}
app.get("/dashboard",auth,(req,res)=>{
    res.send(`hello ${req.user.name}`);
});
app.listen(3000);


