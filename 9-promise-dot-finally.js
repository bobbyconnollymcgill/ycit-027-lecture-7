// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise/finally
// p.finally()

function checkMail() {
    return new Promise((resolve, reject) => {
        if (Math.random() > 0.5) {
            resolve("Mail has arrived");
        } else {
            reject(new Error("Failed to arrive"));
        }
    });
}

checkMail()
    .then((mail) => {
        console.log(mail);
    })
    .catch((err) => {
        console.error(err);
    })
    .finally(() => {
        console.log("Experiment completed");
    });

// The finally method of a promise can be used to register a callback function that will be called when the promise is settled

// This lets you avoid duplicating code that needs to be run after the promise is fulfilled or rejected
