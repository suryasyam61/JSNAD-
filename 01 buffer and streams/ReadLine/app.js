const readLine = require("readline");
const path = require("path");
const fs = require("fs");

const fileName = "file.txt";
const filePath = path.join(__dirname, fileName);

const file = fs.createWriteStream(filePath);

const r1 = readLine.createInterface({
    input: process.stdin
});


console.log("type strings, type -1 to exit");
r1.prompt();

r1.on("line", (input) => {
    const message = input;
    if (input !== "-1") {
        file.write(input + "\n");
    } else {
        r1.close();
    }
})

r1.on('close', () => {
    file.end();
})