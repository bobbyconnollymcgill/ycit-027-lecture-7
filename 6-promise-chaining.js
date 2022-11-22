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

p1.then((value) => {
    console.log("p1", value);
    const p2 = new Promise(executor); // the second promise in the chain
    return p2;
}).then((value) => {
    console.log("p2", value);
});

// Note that in a real application, the executor of p2 would typically be a different function -- ** not the same as the executor of p1 **
// The executor of p2 would typically use/incorporate the value ** obtained from p1 **, such as a user ID or a file name

// When using chaining, DO NOT FORGET to return the promise like we did on line 22 (return p2;)

// *AVOID* nesting promises because it can make the code difficult to read
// Example of nesting promises (not recommended)
// p1.then((value) => {
//     console.log("p1", value);
//     p2.then((value) => {
//         console.log("p2", value);
//     });
// });
