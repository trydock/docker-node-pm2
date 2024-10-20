const http = require("http")

const server = http.createServer((req, res) => {
    // Sending the response
    res.write(`This is the response from the server process id ${process.pid}`)
    res.end();
})

server.listen((3000), () => {
    console.log("Server is Running");
})
