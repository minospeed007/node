const http= require('http')

const server= http.createServer((req,res)=>{
    if(req.url==='/'){
        res.end('Welcome to Springhertz ltd')
    }
if(req.url==='/about'){
res.end('This is about page for Springhertz ltd')
}
res.end(`
<h1>Oops!!</h1>
<p>The page you are looking for does not exist</P>
`)
})

server.listen(8080)