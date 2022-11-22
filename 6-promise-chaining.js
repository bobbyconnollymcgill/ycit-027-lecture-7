// Promise chaining

// A promise can be chained to another promise
// This is useful when we want to perform a series of asynchronous operations and is one of the main reasons why promises are useful
// The first operation is performed, then the second operation is performed, etc.

// This is also called "promise composition"

// In this example, p2 is chained to p1

const p1 = new Promise(executor); // the first promise in the chain

function executor(resolve) {
    setTimeout(() => {
        resolve("I am fulfilled " + new Date().toISOString());
    }, 1000);
}

// We don't need to create a new symbol pChain. I just put it here to show that pChain is a different promise than p1 and p2
const pChain = p1.then((value) => {
    console.log("p1", value);
    const p2 = new Promise(executor); // the second promise in the chain
    return p2; // Here, we are resolving pChain to p2 (see 5-resolving-a-promise-to-another-promise.js)
});

pChain.then((value) => {
    console.log("p2", value);
});

// When using chaining, DO NOT FORGET to return the promise like we did on line 23 (return p2;) or else the next promise in the chain will never settle

// *AVOID* nesting promises because it can make the code difficult to read
// Example of nesting promises (not recommended)
// p1.then((value) => {
//     console.log("p1", value);
//     p2.then((value) => {
//         console.log("p2", value);
//     });
// });
