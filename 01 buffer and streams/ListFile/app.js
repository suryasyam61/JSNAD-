const fs = require("fs");
const { exec } = require("child_process");
const { STATUS_CODES } = require("http");

exec("ls -la", (err, stdout, stderr) => {
    let data = stdout.split("\n");
    data = data.slice(3, data.length - 1 );
    const writeStream = fs.createWriteStream("list.txt");
    for ( const line of data) {
        const lineData = line.split(/\s+/);
        const appName = lineData[8];
        writeStream.write(appName + "\n");
    }
})