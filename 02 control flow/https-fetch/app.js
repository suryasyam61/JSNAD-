const https = require("https");

const req = https.request({
    port: 443,
    host: 'jsonplaceholder.typicode.com',
    path: "/todos/1",
});

req.on("response", (response) => {
    response.on("data", data => {
        console.log(data.toString());
    });
})

req.end();