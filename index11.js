const http=require("http");
const server=http.createServer((req,res)=>{
    res.writeHead(200,{"content-type":"text/html"});
    res.write("<h1>this is a heading</h1>");
    res.write("<p>this is a paragraph tag</p>");
    res.write("<h1>this is a heading tag</h1>");
    res.end();
});
server.listen(8000,()=>{
    console.log(`server is ruuning at address http://localhost:8000`);
});