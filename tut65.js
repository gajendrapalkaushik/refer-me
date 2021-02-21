// Synchronas or blocking
// -line by line execution

// Asynchronas or non-blocking
// -line by line execution not guarenteed
// - callbacks will fire

const fs = require("fs");
fs.readFile("dele.txt", "utf-8", (err, data) => {
    console.log(err, data)
});
console.log("This is a message");