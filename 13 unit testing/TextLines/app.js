const fs = require('fs');
const path = require('path');
const readline = require("readline");
const { RSA_X931_PADDING } = require('constants');
const { resolve } = require('path');
const { rejects } = require('assert');
const { get } = require('http');

const filePath = path.join(__dirname, "file.txt");

const getLines = () => {
    const lines = [];
    const fileStream = fs.createReadStream(filePath);
    const rl = readline.createInterface({
        input: fileStream,
    });

    rl.on("line", data => {
        lines.push(data);
    });
    return new Promise((resolve, reject) => {    
        rl.on('close', () => {
            resolve(lines);
        });
    });

}

exports.getLines = getLines;