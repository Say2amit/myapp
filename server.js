const http = require("http");

const fs = require("fs")
const port = process.env.port;  //matlb jo v availabe port hoga de dega


const home = fs.readFileSync("./index.html")

const server = http.createServer((req,res)=>{
    if(req.url ===  "/"){
        return res.end(home);
    }
    else if(req.url === "/about"){
        return res.end("<h1>About Page</h1>")
    }
    else if(req.url === "/contact"){
        return res.end("<h1>You are on Conatcat Page</h1>")
    }else{
        return res.end("Please Enter Correct url....")
    }
})

server.listen(port, ()=>{
    console.log(`Server is running`);
})