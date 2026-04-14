const http=require("http");
function handler(reg,res){
    res.end("This is my first server");
}
const server=http.createServer(handler);
server.listen(8000,()=>{
    console.log(`server is running at address http://localhost:8000`);
});