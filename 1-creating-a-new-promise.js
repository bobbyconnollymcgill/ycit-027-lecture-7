// We are not going to use native promises in this example
// Instead, we are using a library called Bluebird so that we can inspect the state of the promise
const Promise = require("bluebird");

// Creating a new promise

// The Promise constructor takes a function as an argument
// This function is called the "executor" function

const p = new Promise(executor);

// The executor function is parameterized with a function called "resolve"
function executor(resolve) {
    // The resolve function is called when the promise is fulfilled
    resolve();
}

// If you don't call resolve, the promise will never be fulfilled
// This is called a "pending" promise
// You can check if a promise is pending by calling the .isPending property (only works with Bluebird)

console.log("isPending", p.isPending());
console.log("isFulfilled", p.isFulfilled());
