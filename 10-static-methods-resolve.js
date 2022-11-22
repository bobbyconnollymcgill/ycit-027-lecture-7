const uuid = require("uuid").v4;

// Promise.resolve()

// Promise.resolve() takes a value as an argument and returns a new promise
// The new promise is fulfilled with the value
// The new promise is settled immediately

const p = Promise.resolve("I am fulfilled");

// You can use Promise.resolve() to convert a non-promise value to a promise
// It can also be used to kick off a promise chain

p.then((value) => {
    console.log("p", value);
});

// If you want to ensure that a function returns a promise, you can use Promise.resolve() to wrap the return value of the function
// This is useful when a function has multiple return statements and you want to ensure that the return value is always a promise

function getUserId() {
    return Promise.resolve(uuid());
}

getUserId().then((value) => {
    console.log("getUserId", value);
});
