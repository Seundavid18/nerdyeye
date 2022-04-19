const http = require('http')

const port = process.env.PORT || 5000

const server = http.createServer((req, res) => {
    if (req.url === '/') {
        res.end(`Homepage`)   
    } else if (req.url === '/app') {
        res.end(`This is my first Node app`)
    } else if (req.url === '/node') {
        res.end(`This is a Node Page`)
    } else if (req.url === '/style') {
        res.end(`This is a style sheet`)
    } else {
        res.end(`
        <h1>oops</h1>
        <p>We can't seem to find the page you are looking for</p>
        <a href="/">Back to Homepage</a>
        `)
    }
})

server.listen(port, ()=>{
    console.log(`server is listening on ${port}`)
})