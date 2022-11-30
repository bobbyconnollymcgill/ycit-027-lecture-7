function promiseFactory(theValueWhenFulfilled, howLongItTakes) {
    const p = new Promise((resolve, reject) => {
        setTimeout(() => {
            // theValueWhenFulfilled === "coo coo bear" && reject("wolf ate coo coo bear") // short-circuiting -- same as the line below
            // if (theValueWhenFulfilled === "coo coo bear") {
            //     reject("wolf ate coo coo bear");
            // }
            resolve(theValueWhenFulfilled);
        }, howLongItTakes);
    });

    return p;
}

const p3 = promiseFactory("coo coo bear", 1200);
const p2 = promiseFactory("smokey", 800);
const p1 = promiseFactory("taco", 1000);

const pRace = Promise.race([p3, p1, p2]); // pass in an array-literal as the argument VERY IMPORTANT NOT TO FORGET THE ARRAY

pRace
    .then((result) => {
        console.timeEnd("bobby");
        console.log("result", result);
    })
    .catch((reason) => {
        console.error("error", reason);
    });

console.time("bobby");
