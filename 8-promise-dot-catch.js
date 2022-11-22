// p.catch()

// Here is a function that returns a promise

function checkMail() {
    return new Promise((resolve, reject) => {
        if (Math.random() > 0.5) {
            resolve("Mail has arrived");
        } else {
            reject(new Error("Failed to arrive"));
        }
    });
}

// There is also a second parameter to the then method, which is a callback function that will be called when the promise is rejected
/*
checkMail().then(
    (value) => {
        // Code that runs after the promise is fulfilled
        console.log("p", value);
    },
    (reason) => {
        // Code that runs after the promise is rejected
        console.log("p", reason);
    }
    );
*/

// However, there is a more convenient way to register a callback function for when the promise is rejected
// We can use the catch method

checkMail()
    .then((value) => {
        // Code that runs after the promise is fulfilled
        console.log("p", value);
    })
    .catch((reason) => {
        // Code that runs after the promise is rejected
        console.log("p", reason);
    });

// Optional:
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Using_promises#nesting to learning about nesting promises, and how that affects catch
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Using_promises#chaining_after_a_catch to learn how to perform additional async operations after a catch
