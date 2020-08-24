const fs = require("fs");
const { pipeline } = require("stream");

console.log("Type name of file to read...");
const input = [];
let fileName = null;
process.stdin.on('data', (chunk) => {
    fileName = chunk.toString().trim();
    console.log("Got \"" + fileName + "\" press CTRL + d to continue or type a new filename");
})

process.stdin.on('end', () => {
    console.log('Reading:', fileName);
    pipeline(fs.createReadStream(fileName), process.stdout, (err) => {
        if (err) {
            console.log("Error when reading stream!", err);
        }
    })
})

// console.log("Reading " + filePath);
