const fs = require('fs');
const path = require("path");

const filePath = path.join("file.txt");
console.log("reading " + filePath);


/**
 * read whole file
 */
// fs.readFile(filePath, (err, data) => {
//     if (err) {
//         console.log(err);
//     }
//     console.log(data);
//     const bufferData = data.toString();
//     console.log(bufferData);
// });

const fileStream = fs.createReadStream(filePath);
const data = [];
fileStream.on("data", (chunk) => {
    data.push(chunk);
})

fileStream.on("end", () => {
    const writeFile = fs.createWriteStream('newFile.txt');
    writeFile.on("open", () => {
        writeFile.write(data.toString());
    })
})