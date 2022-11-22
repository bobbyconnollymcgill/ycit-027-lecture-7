// Promise.all()

// Promise.all() takes an array of promises as an argument and returns a new promise

// The new promise is fulfilled when *ALL* of the promises in the array are fulfilled
// The new promise is rejected when *ANY* of the promises in the array are rejected
// In other words, the promise will reject *AS SOON AS* one of the promises in the array rejects

// The new promise is fulfilled with an array of the values of the promises in the array
// The new promise is rejected with the reason of the first promise in the array that is rejected

// The new promise is settled when all the promises in the array are settled

let ind = 0;
let delay = 0;
function executor(resolve) {
    ind++;
    delay += 500;

    setTimeout(() => {
        resolve(`p${ind} is fulfilled at ${new Date().toISOString()}`);
    }, delay);
}

const p1 = new Promise(executor);
const p2 = new Promise(executor);
const p3 = new Promise(executor);

const pAll = Promise.all([p1, p2, p3]);

pAll.then((value) => {
    console.log("pAll", value);
});

// Note: Promise.allSettled

// There is also a method called Promise.allSettled() that is similar to Promise.all() in that it takes an array of promises as an argument and returns a new promise

// However, Promise.allSettled() *WILL NOT* reject upon hitting the first rejection
// Instead, it will collect all the results of the promises return them in an array
// This is useful when we don't care if some of the processes fail; we just want to know the results of all the processes (fulfilled or rejected)

// Can you create an example of Promise.allSettled()?
