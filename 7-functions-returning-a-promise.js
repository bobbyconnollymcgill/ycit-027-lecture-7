const uuid = require("uuid").v4;

// Functions can also return promises

function getUserId() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(uuid());
        }, 200);
    });
}

getUserId().then((id) => {
    console.log(id);
});

// The getUserId function returns a promise

// It doesn't matter if the promise returned by the function is pending or fulfilled, we can still chain it to another promise just like we did in 6-promise-chaining.js

// The then method will be called once the promise is fulfilled
