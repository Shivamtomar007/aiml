const http = require('http');
const PORT = 2560;
const server = http.createServer((req,res)=>{
res.write("Welcome to Node Server");
res.end(" Request Completed");
})
server.listen(PORT,()=>{
console.log("First Server is running on port "+PORT);
})
