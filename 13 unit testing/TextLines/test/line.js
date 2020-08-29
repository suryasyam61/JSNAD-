const mocha = require("mocha");
const assert = require('assert').strict;


const getLines = require('../app').getLines;

describe("Lines in file", () => {
    it("should test if the array returned by the function is correct", (done) => {
        getLines()
            .then(data => {
                for(let i = 0; i < data.length; data++ ) {
                    const line = data[i];
                    assert.equal(line, "line" + 1);
                }
                done(data);
            })
            .catch(err => done(err));
    })
})