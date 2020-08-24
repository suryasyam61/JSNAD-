const net = require('net');
const { pipeline, Transform } = require('stream');
const { stdout } = require('process');

const client = new net.Socket();

client.connect(5000, "127.0.0.1", () => {
    console.log("Connected");
    console.log("Type message to send, CTRL + d to exit");
});

const serverMessageTransform = new Transform({
    transform: (chunk, encoding, callback) => {
        callback(null, "Server says: " + chunk.toString() + "\n");
    }
})

pipeline(client, serverMessageTransform, stdout, (err) => {
    if (err) {
        console.log(err)
    }
})

client.on('end', () => {
    process.stdin.destroy();
    console.log("Connection closed!")
});

process.stdin.on('data', (data) => {
    const message = data.toString().trim();
    client.write(message);  
});

process.stdin.on('end', (data) => {
    client.end();
});


