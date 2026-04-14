const http=require("http");
function handler(req,res){
    console.log(req.url);
    console.log(req.method);
    console.log(req.headers);
    res.end(`this is firt server`);
    
}
const server=http.createServer(handler);
server.listen(8001,()=>{
    console.log(`server is running at address http://localhost:8001`);
});