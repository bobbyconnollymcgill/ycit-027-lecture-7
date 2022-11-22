const Promise = require("bluebird");

// Rejecting a promise

// The executor function can also take a second parameter called "reject"
// The reject function is called when the promise is rejected

const p = new Promise(executor);

function executor(resolve, reject) {
    // Reject the promise
    reject("Something terrible happened");
}

// If you don't call resolve or reject, the promise will never be fulfilled or rejected
// This is called a "pending" promise
// You can check if a promise is pending by calling the .isPending property (only works with Bluebird)
// You can also check if a promise is fulfilled or rejected by calling the .isFulfilled and .isRejected properties (only works with Bluebird)

console.log("isPending", p.isPending());
console.log("isFulfilled", p.isFulfilled());
console.log("isRejected", p.isRejected());
