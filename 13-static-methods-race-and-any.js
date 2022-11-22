// Promise.race() and Promise.any()

// Promise.race() and Promise.any() are similar to Promise.all() in 12-static-mathod-Promise-dot-all.js in that they take an array of promises as an argument and return a new promise
// Promise.race() and Promise.any() are different from Promise.all() in 12-static-mathod-Promise-dot-all.js in that they are fulfilled when *ANY* of the promises in the array are fulfilled

// Promise.race() is settled as soon as *ANY* one of the promises in the array is settled (it doesn't matter whether it got settled by being fulfilled or rejected)
// Promise.any() is settled as soon as *ANY* one of the promises in the array is fulfilled *OR* all of the promises in the array are rejected

// Think of "race" like we want to know as soon as we get an answer, fulfilled or rejected
// Think of "any" like we want to know as soon as we get a fulfilled answer, and we are willing to wait for all the promises to be rejected before settling the promise as rejected

const p1 = new Promise((resolve, reject) => {
    setTimeout(() => {
        reject("I am rejected " + new Date().toISOString());
    }, 300);
});
const p2 = new Promise((resolve, reject) => {
    setTimeout(() => {
        reject("I am rejected " + new Date().toISOString());
    }, 600);
});
const p3 = new Promise((resolve) => {
    setTimeout(() => {
        resolve("I am fulfilled " + new Date().toISOString());
    }, 900);
});

const pRace = Promise.race([p1, p2, p3]);

pRace
    .then((value) => {
        console.log("pRace", value);
    })
    .catch((reason) => {
        console.log("pRace", reason);
    });

const pAny = Promise.any([p1, p2, p3]);

pAny.then((value) => {
    console.log("pAny", value);
}).catch((reason) => {
    console.log("pAny", reason);
});
