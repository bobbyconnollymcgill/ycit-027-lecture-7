const Promise = require("bluebird");

// Resolving a promise to another promise

// A promise can be resolved to another promise

// In this example, p1 is resolved to p2
// We will call p1 the "outer promise" and p2 the "inner promise"

const p2 = new Promise(executor2); // inner promise
const p1 = new Promise(executor1); // outer promise

function executor1(resolve, reject) {
    resolve(p2);
}

function executor2(resolve, reject) {
    resolve("I am fulfilled");
}

console.log("isPending", p1.isPending(), p2.isPending());
console.log("isFulfilled", p1.isFulfilled(), p2.isFulfilled());
console.log("isRejected", p1.isRejected(), p2.isRejected());

/**
 *
 * The outer promise is fulfilled or rejected when the inner promise is fulfilled or rejected
 * The outer promise is pending until the inner promise is fulfilled or rejected
 *
 * The outer promise is fulfilled with the value of the inner promise when the inner promise is fulfilled
 * The outer promise is rejected with the reason of the inner promise when the inner promise is rejected
 *
 * The outer promise is settled when the inner promise is settled
 *
 */
