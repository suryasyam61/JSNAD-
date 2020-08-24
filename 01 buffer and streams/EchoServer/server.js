const net = require("net");
const { pipeline, Transform } = require("stream");
const { stdout } = require("process");



const server = net.createServer();

server.on("connection", (socket) => {
    console.log("Got connection from:" + socket.remoteAddress);
    
    socket.write("Echo Server\r\n");
    socket.on("error", (err) => {
        console.log(err);
    });
    pipeline(
        socket,
        socket,
            new Transform({
            transform: (chunk, encoding, callback) => {
                callback(null, "Client says: " + chunk.toString() + "\n");
            }
        }),
        stdout,
        (err) => {
        if (err) {
            console.log("Error in socket stream", err);
        }
    })

    socket.on("close", () => {
        console.log("Connection closed");
    })
});

server.on("close", () => { 
    console.log("Server closing");
})

server.listen(5000);
console.log('Server Listening on port 5000');