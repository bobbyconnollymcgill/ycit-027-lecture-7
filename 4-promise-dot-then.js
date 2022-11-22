// p.then()

// The then method of a promise can be used to register a callback function that will be called when the promise is fulfilled

// This is useful when we want to perform an asynchronous operation and then perform another operation after the first operation is completed

const p = new Promise(executor);

function executor(resolve) {
    setTimeout(() => {
        resolve("I am fulfilled " + new Date().toISOString());
    }, 1000);
}

p.then((value) => {
    // Code that runs after the promise is fulfilled
    console.log("p", value);
});

// Code that runs before the promise is fulfilled
console.log("I am *not* waiting for the promise to be fulfilled");

// Note: the then() method always returns a different promise
