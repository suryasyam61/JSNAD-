const fetch = require("node-fetch");

const url = "https://jsonplaceholder.typicode.com/todos/1";

const doFetch = async (url) => {
    console.log("fetching: " + url + " ...");
    const response = await fetch(url);
    return response.json();
}

doFetch(url).then(data => {
    console.log("in then:", data);
})
.catch(err => {console.log(err)});
