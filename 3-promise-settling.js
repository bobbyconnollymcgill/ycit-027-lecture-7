const Promise = require("bluebird");

// Settling a promise

// A settled promise means that the promise is either fulfilled or rejected
// In other words, a settled promise is not pending

// Once a promise is settled, it cannot be settled again

const p = new Promise(executor);

function executor(resolve, reject) {
    resolve("I am fulfilled");
    reject("Something terrible happened");
}

console.log("isPending", p.isPending());
console.log("isFulfilled", p.isFulfilled());
console.log("isRejected", p.isRejected());

// Note that the promise is fulfilled, not rejected

// This is because the promise can only be settled once
// The first call to resolve or reject "settles" the promise
// The second call to resolve or reject is ignored
