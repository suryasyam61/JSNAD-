const { Writable} = require("stream");

const writable = new Writable({
    write(chunk, encoding, cb) {
        cb(console.log(chunk.toString()));
    }
})


writable.write("helo");